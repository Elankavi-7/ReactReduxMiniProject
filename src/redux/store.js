import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './dropdownSlice';
import uiReducer from './uiSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    ui: uiReducer,
    user: userReducer,
  },
});