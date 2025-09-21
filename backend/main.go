package main

import (
	"fmt"
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB

// User модель для базы данных
type User struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func init() {
	// Строка подключения к базе данных
	// Используй правильные значения для пользователя, пароля, базы данных и хоста
	var err error
	dsn := "host=localhost user=oracul password=secret dbname=oracul_db port=5432 sslmode=disable"
	db, err = gorm.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}

	// Автоматическая миграция для создания таблицы пользователей
	if err := db.AutoMigrate(&User{}).Error; err != nil {
		log.Fatalf("failed to migrate database: %v", err)
	}
}

func main() {
	// Пример регистрации пользователя
	user := User{
		Username: "testuser",
		Email:    "testuser@example.com",
		Password: "password123",
	}

	// Сохраняем пользователя в базе данных
	if err := db.Create(&user).Error; err != nil {
		log.Fatalf("failed to create user: %v", err)
	}

	fmt.Println("User registered successfully")
}
