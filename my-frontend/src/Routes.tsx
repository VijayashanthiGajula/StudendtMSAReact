import React from 'react';
import {Route, Routes  } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Home from './components/intakes/Home';
import Intakes from './components/intakes/Intakes';
import Courses from './components/courses/Courses';
import AddCourse from './components/courses/AddCourse';
import AddIntake from './components/intakes/AddIntake';
import EditIntake from './components/intakes/EditIntake';
import Sample from './components/intakes/Sample';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Intakes">
                  <Route index element={<Intakes />} />
                  <Route path="add" element={<AddIntake />} />
                  {/* <Route path="edit/:id" element={<EditIntake />} />
                  <Route path="delete/:id" element={<DeleteIntake />} /> */}
               </Route>
               <Route path="/Courses">
                  <Route index element={<Courses />} />
                  <Route path="add" element={<AddCourse />} />
                  {/* <Route path="edit/:id" element={<EditCourse />} />
                  <Route path="delete/:id" element={<DeleteCourse />} /> */}
               </Route>
               <Route path="/Sample">
                  <Route index element={<Sample />} />                  
               </Route>
            </Routes>
   
  );
};

export default AppRoutes;
