import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAppointmentsAPI, addAppointmentAPI } from '../../services/appointmentService';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async () => await fetchAppointmentsAPI()
);

export const addAppointment = createAsyncThunk(
  'appointments/addAppointment',
  async (appointmentData) => await addAppointmentAPI(appointmentData)
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  }
});

export default appointmentsSlice.reducer;
