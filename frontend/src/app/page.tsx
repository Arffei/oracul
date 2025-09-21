"use client";

import * as React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h2" gutterBottom>
          Добро пожаловать в Oracul 🎮
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Платформа для игр и сообщества. Здесь будут игры, магазин, профиль и многое другое.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
          onClick={() => alert("Скоро добавим регистрацию!")}
        >
          Начать
        </Button>
      </Box>
    </Container>
  );
}