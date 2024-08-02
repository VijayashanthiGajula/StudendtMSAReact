// src/reducers/intakesReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIntake } from '../types/intakesInterface';
import { getIntakes, createIntake, editIntake, deleteIntake } from './intakeActions';

// Define the initial state and its interface
interface IntakesState {
  data: IIntake[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IntakesState = {
  data: [],
  status: 'idle',
  error: null,
};

// Defining intake reducer 
const IntakesSlice = createSlice({
  name: 'intakes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIntakes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIntakes.fulfilled, (state, action: PayloadAction<IIntake[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(getIntakes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch intakes';
      })
      .addCase(createIntake.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createIntake.fulfilled, (state, action: PayloadAction<IIntake>) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(createIntake.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add intake';
      })
      .addCase(editIntake.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editIntake.fulfilled, (state, action: PayloadAction<IIntake>) => {
        state.status = 'succeeded';
        const index = state.data.findIndex(intake => intake.intakeId === action.payload.intakeId);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(editIntake.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to edit intake';
      })
      .addCase(deleteIntake.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteIntake.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.data = state.data.filter(intake => intake.intakeId !== action.payload);
      })
      .addCase(deleteIntake.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete intake';
      });
  },
});

export default IntakesSlice.reducer;
