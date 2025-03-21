import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Appbar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SpringBoot React FullStack Student Management App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
