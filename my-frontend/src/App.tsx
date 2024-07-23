import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Intakes from "./components/Intakes";
import AddIntake from "./components/AddIntake";
import EditContact from "./components/EditContact";
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
      </Routes>
    </div>
  );
};

export default App;


