import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import {ThemeProviderWrapper}   from './Theme2';
import AppRoutes from './Routes'; 
import ThemeComponent from './ThemeComponent';

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper >  
      <ThemeComponent />      
      <Navbar />  
      <AppRoutes/>
      </ThemeProviderWrapper > 

  );
};

export default App;
