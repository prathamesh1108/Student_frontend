import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper } from "@mui/material";

export default function Student() {
  const paperstyle = { padding: "50px 20px", width: 500, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (address.trim() === "") {
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    // If any error exists, stop submission
    if (name.trim() === "" || address.trim() === "") {
      return;
    }
    const student = { name, address };
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
      setName("");
      setAddress("");
    });
  };

  return (
    <>
      <Container>
        <Paper elevation={5} style={paperstyle}>
          <h1 className="heading">Add Student</h1>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Student name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Name is required" : ""}
              fullWidth
            />
            <TextField
              label="Student address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              error={addressError}
              helperText={addressError ? "Adress is required" : ""}
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
