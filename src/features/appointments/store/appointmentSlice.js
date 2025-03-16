
// src/features/appointments/store/appointmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAppointments, updateAppointmentStatus } from '../services/appointmentService';

export const loadAppointments = createAsyncThunk('appointments/load', fetchAppointments);
export const changeStatus = createAsyncThunk('appointments/status', async ({ id, status }) => {
  await updateAppointmentStatus(id, status);
  return { id, status };
});

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadAppointments.pending, state => { state.loading = true; })
      .addCase(loadAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        const { id, status } = action.payload;
        const index = state.list.findIndex(a => a.id === id);
        if (index !== -1) state.list[index].status = status;
      });
  }
});

export default appointmentSlice.reducer;
