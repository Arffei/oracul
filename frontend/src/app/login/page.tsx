"use client";

import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header"; // Подключаем Header

export default function LoginPage() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h4">Авторизация</Typography>
          <Typography variant="h6" color="text.secondary" mt={3}>
            Введите свои данные для входа.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
