import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Pokéverse
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

