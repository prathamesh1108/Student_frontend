import React, { useState, useEffect } from "react";
import { Container, Paper, List, ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Studentlist() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/student/get/${id}`);

      if (response.ok) {
        const student = await response.json();
        navigate(`/edit/${id}`, { state: { student } }); // Pass data to edit page
      } else {
        console.error("Failed to fetch student details");
      }
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/student/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <Container>
      <List>
        <h1 style={{ color: "blue" }}>Students</h1>
        {students.map((student) => (
          <Paper
            key={student.id}
            elevation={3}
            style={{ padding: "10px", width: 400, margin: "10px auto" }}
          >
            <form style={{ display: "flex" }}>
              <ListItemText
                primary={student.name}
                secondary={student.address}
              />
              <Button onClick={() => handleEdit(student.id)}>Edit</Button>
              <Button onClick={() => handleDelete(student.id)}>Delete</Button>
            </form>
          </Paper>
        ))}
      </List>
      <Button onClick={() => navigate("/")} variant="contained">
        Back to Add List
      </Button>
    </Container>
  );
}
