import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Paper } from "@mui/material";

export default function Editstudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student || { id: "", name: "", address: "" };
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/student/update/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/Studentlist");
      } else {
        console.error("Failed to update student");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <Container>
      <h1>Edit Student</h1>
      <Paper
        key={student.id}
        elevation={3}
        style={{ padding: "10px", width: 400, margin: "10px auto" }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/Studentlist")}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
