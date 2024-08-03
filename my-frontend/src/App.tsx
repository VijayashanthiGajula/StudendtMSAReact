import React, { useState } from 'react';
import Navbar from './Navbar';
import {ThemeProviderWrapper}   from './constants/ThemeConstants';
import AppRoutes from './constants/Routes'; 
import ThemeComponent from './components/theme/ThemeComponent';

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper >             
      <Navbar />   
      <ThemeComponent />
      <AppRoutes/>
      </ThemeProviderWrapper > 

  );
};

export default App;
