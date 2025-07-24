// src/actions/intakesActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CourseUrl } from '../constants/url.constants';
import { ICourse } from '../types/courseInterface';

const url=CourseUrl;
const newRecord='newCourse';
// Async thunk for fetching intakes
export const getCourses = createAsyncThunk('courses/getCourses', async () => {
  const response = await axios.get<ICourse[]>(url);
  console.log("API Base URL:", url);
  console.log(response);
  return response.data;
   
});


// Async thunk for adding an intake
export const createCourse = createAsyncThunk('courses/createCourse', async (newRecord: ICourse) => {
  const response = await axios.post<ICourse>(url, newRecord);
  console.log(response);
  return response.data;
});

// Async thunk for editing an intake
export const editCourse= createAsyncThunk('courses/editCourse', async (updatedRecord: ICourse) => {
  const response = await axios.put<ICourse>(`${url}/${updatedRecord.intakeId}`, updatedRecord);
  console.log(response);
  return response.data;
});

// Async thunk for deleting an intake
export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id: number) => {
  await axios.delete(`${url}/${id}`);
  return id;
});
