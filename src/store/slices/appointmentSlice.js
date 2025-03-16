import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  loading: false,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAppointments, setLoading } = appointmentSlice.actions;
export default appointmentSlice.reducer;
