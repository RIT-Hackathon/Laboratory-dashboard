import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./appointmentsSlice";
import staffReducer from "./staffSlice";

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    staff: staffReducer,
  },
});

export default store;
