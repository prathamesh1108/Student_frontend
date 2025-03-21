import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Studentlist from "./components/Studenlist";
import React from "react";
import Student from "./components/Student";
import Appbar from "./components/Appbar";
import Editstudent from "./components/Editstudent";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Router>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/Studentlist" element={<Studentlist />} />
          <Route path="/edit/:id" element={<Editstudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
