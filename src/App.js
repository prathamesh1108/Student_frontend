import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Studentlist from "./components/Studenlist";
import React from "react";
import Appbar from "./components/Appbar";
import Editstudent from "./components/Editstudent";
import Addstudent from "./components/Addstudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Studentlist />} />
          <Route path="/Addstudent" element={<Addstudent />} />
          <Route path="/edit/:id" element={<Editstudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
