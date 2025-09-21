package main

import (
	"log"
	"oracul-backend/controllers"
	"oracul-backend/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func main() {
	dsn := "host=localhost user=oracul password=secret dbname=oracul_db port=5432 sslmode=disable"
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to database")
	}

	// Миграция модели
	db.AutoMigrate(&models.User{})

	// Инициализация контроллеров
	controllers.Initialize(db)

	r := gin.Default()

	// Роут для регистрации
	r.POST("/auth/register", controllers.RegisterUser)

	r.Run(":8080")
}
