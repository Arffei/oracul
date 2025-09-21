"use client";

import { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);  // Показываем сообщение об успехе
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Error occurred");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Имя пользователя"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Пароль"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" type="submit" fullWidth>
            Зарегистрироваться
          </Button>
        </form>
        {message && (
          <Typography variant="h6" sx={{ mt: 2 }} color="error">
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
