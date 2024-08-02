import { configureStore } from '@reduxjs/toolkit';
//import intakesReducer from '../slices/intakesSlice';
//import IntakesSlice from '../slices/intakesSlice';
import IntakesSlice from '../Redux/intakeReducer';

const store = configureStore({
  reducer: {
    intakes: IntakesSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
