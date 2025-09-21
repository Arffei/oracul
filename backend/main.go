package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var users []User

// Валидация пароля (например, минимальная длина)
func isValidPassword(password string) bool {
	return len(password) >= 6
}

// Регистрация пользователя с валидацией
func registerUser(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var user User
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, "Invalid data", http.StatusBadRequest)
			return
		}

		// Валидация: проверка, что имя пользователя и пароль не пустые
		if user.Username == "" || user.Password == "" {
			http.Error(w, "Username and password are required", http.StatusBadRequest)
			return
		}

		// Валидация пароля
		if !isValidPassword(user.Password) {
			http.Error(w, "Password must be at least 6 characters long", http.StatusBadRequest)
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
	if r.Method == http.MethodGet {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(users)
	} else {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
	}
}

func main() {
	http.HandleFunc("/register", registerUser)
	http.HandleFunc("/users", getUsers)

	fmt.Println("Server is running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Error starting server:", err)
	}
}
