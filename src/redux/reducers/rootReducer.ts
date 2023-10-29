import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';
import userReducer from './userReducer';
import toastReducer from './toastReducer';

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
  toastReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
