import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    activeDropdown: null,
    isServicesOpen: false,
  },
  reducers: {
    setActiveDropdown: (state, action) => {
      state.activeDropdown = action.payload;
    },
    toggleServices: (state) => {
      state.isServicesOpen = !state.isServicesOpen;
    },
    closeAllDropdowns: (state) => {
      state.activeDropdown = null;
      state.isServicesOpen = false;
    },
  },
});

export const { setActiveDropdown, toggleServices, closeAllDropdowns } = dropdownSlice.actions;
export default dropdownSlice.reducer;