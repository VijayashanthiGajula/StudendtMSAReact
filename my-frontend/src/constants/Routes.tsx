import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Home from '../components/intakes/Home';
import Intakes from '../components/intakes/Intakes';
import Courses from '../components/courses/Courses';
import AddCourse from '../components/courses/AddCourse'; 
import Sample from '../components/intakes/Sample';

const AppRoutes: React.FC = () => {
   return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intakes" element={<Intakes />} />        
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses/add" element={<AddCourse />} />
        {/* <Route path="/Courses/edit/:id" element={<EditCourse/>} /> */}          
         {/* <Route path="/extra" element={<Intakes />} /> */}
         <Route path="/Sample" element={<Sample />} />
      </Routes>

   );
};

export default AppRoutes;
