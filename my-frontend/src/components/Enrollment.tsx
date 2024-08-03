import React from 'react'
import CustomBackButton from './CustomBackButton';
import { Container } from '@mui/material';

const Enrollment = () => {
  return (
    <Container   >
        <h1>Enrollments </h1>
        <p> Sprint 2, Show Enrollments list for Admin, enrollment form for Student</p>        
        <CustomBackButton/>
        </Container>
  )
}

export default Enrollment