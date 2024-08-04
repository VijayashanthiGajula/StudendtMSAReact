import { Button } from '@mui/material'
import React from 'react' 
import { useNavigate } from "react-router-dom";



const CustomBackButton = () => {
  const redirect = useNavigate();
  return (
    <div>
      <Button  variant="outlined" sx={{ m: 2 }}  
        color="primary"
        onClick={() => redirect("/")}
      >Back to Home </Button></div>
  )
}

export default CustomBackButton
