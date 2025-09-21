"use client";

import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header"; // Подключаем Header

export default function GamesPage() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box textAlign="center" mt={5}>
          <Typography variant="h4">Каталог игр</Typography>
          <Typography variant="h6" color="text.secondary" mt={3}>
            Здесь будут игры, которые можно будет приобрести.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
