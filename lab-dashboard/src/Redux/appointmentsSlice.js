import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to Fetch Appointments from Backend
export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", async () => {
  const response = await fetch("https://your-api.com/appointments");
  return response.json();
});

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: { list: [], loading: false, error: null },
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
      });
  },
});

export default appointmentsSlice.reducer;
