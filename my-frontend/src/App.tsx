import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import Theme from './Theme'
import AppRoutes from './Routes'; 

const App: React.FC = () => {
  return (
    <div>  
      <Theme/> 
      <Navbar />  
      <AppRoutes/> 
     
    </div>

  );
};

export default App;
