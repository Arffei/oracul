package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var users []User

// Структура пользователя
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// Секретный ключ для подписи JWT
var secretKey = []byte("your_secret_key")

// Генерация JWT токена
func generateJWT(user User) (string, error) {
	claims := jwt.MapClaims{
		"username": user.Username,
		"exp":      time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(secretKey)
}

// Проверка валидности JWT токена
func validateJWT(r *http.Request) (*jwt.Token, error) {
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		return nil, fmt.Errorf("authorization header is missing")
	}
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})
	if err != nil {
		return nil, err
	}
	return token, nil
}

// Регистрация нового пользователя
func registerUser(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var user User
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, "Invalid data", http.StatusBadRequest)
			return
		}

		if user.Username == "" || user.Password == "" {
			http.Error(w, "Username and password are required", http.StatusBadRequest)
			return
		}

		// Добавляем пользователя в список
		users = append(users, user)

		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(user)
	} else {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
	}
}

// Получение всех пользователей
func getUsers(w http.ResponseWriter, r *http.Request) {
	_, err := validateJWT(r)
	if err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

// Вход и получение JWT токена
func loginUser(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var user User
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, "Invalid data", http.StatusBadRequest)
			return
		}

		// Проверяем, существует ли пользователь
		for _, u := range users {
			if u.Username == user.Username && u.Password == user.Password {
				// Генерируем JWT токен
				token, err := generateJWT(u)
				if err != nil {
					http.Error(w, "Error generating token", http.StatusInternalServerError)
					return
				}

				// Отправляем токен
				w.Header().Set("Content-Type", "application/json")
				json.NewEncoder(w).Encode(map[string]string{"token": token})
				return
			}
		}

		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
	} else {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
	}
}

func main() {
	http.HandleFunc("/register", registerUser)
	http.HandleFunc("/users", getUsers)
	http.HandleFunc("/login", loginUser)

	fmt.Println("Server is running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Error starting server:", err)
	}
}
