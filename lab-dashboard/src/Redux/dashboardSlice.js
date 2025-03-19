import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAppointments: 10,
  completed: 6,
  pending: 4,
  reportsReady: 3,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateStats: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateStats } = dashboardSlice.actions;
export default dashboardSlice.reducer;
