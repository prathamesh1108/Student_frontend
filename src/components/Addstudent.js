import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const paperstyle = { padding: "50px 20px", width: 500, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

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

    if (email.trim() === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (name.trim() === "" || address.trim() === "" || email.trim() === "") {
      return;
    }

    const student = { name, address, email };
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      setOpenSnackbar(true); // Open success message
      setName("");
      setAddress("");
      setEmail("");
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
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
              helperText={addressError ? "Address is required" : ""}
            />
            <TextField
              label="Student email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              error={emailError}
              helperText={emailError ? "Email is required" : ""}
            />
            <Button onClick={handleClick} variant="contained">
              Submit
            </Button>
            <Button onClick={() => navigate("/")} variant="contained">
              Cancel
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Student added successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
