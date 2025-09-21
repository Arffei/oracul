import * as React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} href="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} href="/games">
            Игры
          </Button>
          <Button color="inherit" component={Link} href="/login">
            Войти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;