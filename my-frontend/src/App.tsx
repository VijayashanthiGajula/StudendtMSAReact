import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import Theme from './Theme'

const App: React.FC = () => {
  return (
    <div>  
      <Theme/> 
      <Navbar />      
    </div>

  );
};

export default App;
