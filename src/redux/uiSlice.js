import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    theme: 'light',
    modal: {
      isOpen: false,
      type: null,
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.type = action.payload;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.type = null;
    },
  },
});

export const { setLoading, toggleTheme, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;