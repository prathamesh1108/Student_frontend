import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Studentlist from "./components/Studenlist";
import React from "react";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/Studentlist" element={<Studentlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
