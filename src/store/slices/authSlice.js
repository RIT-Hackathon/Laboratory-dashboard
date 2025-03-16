import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // null means not logged in
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Simulate login success
      state.user = { email: action.payload.email }; // Fake user
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
