"use client";

import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // пока что просто выводим данные в консоль
    console.log("Регистрация:", { username, email, password });
    alert("Регистрация отправлена! (пока без бэкенда)");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <TextField
          label="Имя пользователя"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Пароль"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleRegister}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
}