import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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
      <h1 className="heading">Students</h1>

      <TableContainer
        component={Paper}
        sx={{ maxWidth: 800, margin: "30px auto", padding: 2 }}
      >
        <Table>
          <TableHead component={Paper}>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Address</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          {students.map((student) => (
            <TableBody>
              <TableRow key={student.id}>
                <TableCell sx={{ textAlign: "center" }}>
                  {student.name}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {student.address}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Button
                    onClick={() => handleEdit(student.id)}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(student.id)}
                    variant="contained"
                    color="error"
                    sx={{ ml: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>

      <Button onClick={() => navigate("/")} variant="contained">
        Back to Add List
      </Button>
    </Container>
  );
}
