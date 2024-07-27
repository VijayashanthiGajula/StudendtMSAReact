import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Home from './components/intakes/Home';
import Intakes from './components/intakes/Intakes';
import Courses from './components/courses/Courses';
import AddCourse from './components/courses/AddCourse';
import AddIntake from './components/intakes/AddIntake';
import EditContact from './components/intakes/EditContact';
import Sample from './components/intakes/Sample';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/Intakes" element={<Intakes />} />
        <Route path="/Sample" element={<Sample />} />
        <Route path="/Intakes/add" element={<AddIntake />} />
        <Route path="/Intakes/edit/:id" element={<EditContact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses/add" element={<AddCourse />} />
      </RouterRoutes>
    </Router>
  );
};

export default AppRoutes;
