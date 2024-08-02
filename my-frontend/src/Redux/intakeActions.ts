// src/actions/intakesActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../constants/url.constants';
import { IIntake } from '../types/intakesInterface';

// Async thunk for fetching intakes
export const getIntakes = createAsyncThunk('intakes/getIntakes', async () => {
  const response = await axios.get<IIntake[]>(baseUrl);
  console.log(response);
  return response.data;
   
});


// Async thunk for adding an intake
export const createIntake = createAsyncThunk('intakes/createIntake', async (newIntake: IIntake) => {
  const response = await axios.post<IIntake>(baseUrl, newIntake);
  console.log(response);
  return response.data;
});

// Async thunk for editing an intake
export const editIntake = createAsyncThunk('intakes/editIntake', async (updatedIntake: IIntake) => {
  const response = await axios.put<IIntake>(`${baseUrl}/${updatedIntake.intakeId}`, updatedIntake);
  console.log(response);
  return response.data;
});

// Async thunk for deleting an intake
export const deleteIntake = createAsyncThunk('intakes/deleteIntake', async (intakeId: number) => {
  await axios.delete(`${baseUrl}/${intakeId}`);
  return intakeId;
});
