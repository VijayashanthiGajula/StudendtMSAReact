import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/intakes/Home";
import Intakes from "./components/intakes/Intakes";
import Courses from "./components/courses/Courses";
import AddIntake from "./components/intakes/AddIntake";
import EditContact from "./components/intakes/EditContact";
//import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intakes" element={<Intakes />} />
        <Route path="/Intakes/add" element={<AddIntake/>} />
        <Route path="/Intakes/edit" element={<EditContact/>} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;


