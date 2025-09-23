"use client";

import { Container, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

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
        <Typography variant="h2" component="h1" gutterBottom>
          🎮 Oracul
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Добро пожаловать в Oracul — платформу для игр и комьюнити.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/register"
        >
          Начать
        </Button>
      </Box>
    </Container>
  );
}
