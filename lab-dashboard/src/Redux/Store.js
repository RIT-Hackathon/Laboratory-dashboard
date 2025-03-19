import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./appointmentsSlice";
import staffReducer from "./staffSlice";
import dashboardReducer from "./dashboardSlice";

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    staff: staffReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
