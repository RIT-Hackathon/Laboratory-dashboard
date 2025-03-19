import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "John Doe", date: "2025-03-19", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-03-19", time: "12:30 PM", status: "Pending" },
  ],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    updateAppointmentStatus: (state, action) => {
      const { id, status } = action.payload;
      const appointment = state.list.find((apt) => apt.id === id);
      if (appointment) {
        appointment.status = status;
      }
    },
  },
});

export const { updateAppointmentStatus } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
