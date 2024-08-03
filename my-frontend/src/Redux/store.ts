import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import intakesReducer from '../slices/intakesSlice';
//import IntakesSlice from '../slices/intakesSlice';
//import IntakesSlice from '../Redux/intakeReducer';
import intakesReducer from './intakeReducer';
import coursesReducer from './courseReducer';

const rootReducer = combineReducers({
  intakes: intakesReducer,
  courses: coursesReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>; 
export type AppDispatch = typeof store.dispatch;
export default store;
