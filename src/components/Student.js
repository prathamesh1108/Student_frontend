import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper } from "@mui/material";
import Appbar from "./Appbar";

export default function Student() {
  const paperstyle = { padding: "50px 20px", width: 500, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
    });
  };

  return (
    <>
      <Appbar />
      <Container>
        <Paper elevation={5} style={paperstyle}>
          <h1 style={{ color: "blue" }}>Add Student</h1>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Student name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Student address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
            />
            <Button onClick={handleClick} variant="contained">
              Submit
            </Button>
            <Button
              onClick={() => navigate("/Studentlist")}
              variant="contained"
            >
              View List
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
