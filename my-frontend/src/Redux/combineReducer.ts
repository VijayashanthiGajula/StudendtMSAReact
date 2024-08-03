// rootReducer.ts
import { combineReducers } from 'redux';
import intakesReducer from './intakeReducer';
import coursesReducer from './courseReducer';

const rootReducer = combineReducers({
  intakes: intakesReducer,
  courses: coursesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
