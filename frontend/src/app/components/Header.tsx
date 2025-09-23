"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Логотип */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            🎮 Oracul
          </Link>
        </Typography>

        {/* Кнопки навигации */}
        <Box>
          <Button color="inherit" component={Link} href="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} href="/register">
            Регистрация
          </Button>
          <Button color="inherit" component={Link} href="/login">
            Вход
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;