import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div" textAlign="center">
            Student CRM Full Stack App
          </Typography>
          <Button
            onClick={() => navigate("/Addstudent")}
            variant="outlined"
            color="inherit"
            sx={{ position: "absolute", right: 20 }}
          >
            Add Student
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
