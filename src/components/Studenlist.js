import React, { useState, useEffect } from "react";
import { Container, Paper, List, ListItem, ListItemText } from "@mui/material";
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

  return (
    <Container>
      <Paper
        elevation={5}
        style={{ padding: "50px 20px", width: 500, margin: "20px auto" }}
      >
        <h1 style={{ color: "blue" }}>Students</h1>
        <List>
          {students.map((student) => (
            <ListItem key={student.id}>
              <ListItemText
                primary={student.name}
                secondary={student.address}
              />
            </ListItem>
          ))}
        </List>
        <Button onClick={() => navigate("/")} variant="contained">
          Add Students
        </Button>
      </Paper>
    </Container>
  );
}
