// src/reducers/intakesReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourse } from '../types/courseInterface';
import { getCourses,createCourse,editCourse,deleteCourse} from './courseActions';

// Define the initial state and its interface
interface CourseState {
  data: ICourse[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CourseState = {
  data: [],
  status: 'idle',
  error: null,
};

// Defining intake reducer 
const CourseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourses.fulfilled, (state, action: PayloadAction<ICourse[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch intakes';
      })
      .addCase(createCourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCourse.fulfilled, (state, action: PayloadAction<ICourse>) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add intake';
      })
      .addCase(editCourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editCourse.fulfilled, (state, action: PayloadAction<ICourse>) => {
        state.status = 'succeeded';
        const index = state.data.findIndex(intake => intake.intakeId === action.payload.intakeId);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to edit intake';
      })
      .addCase(deleteCourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCourse.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.data = state.data.filter(intake => intake.intakeId !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete intake';
      });
  },
});

export default CourseSlice.reducer;
