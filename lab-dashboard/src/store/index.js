// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import appointmentsReducer from '../features/appointments/appointmentsSlice';
import staffReducer from '../features/staff/staffSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    staff: staffReducer,
  }
});

export default store;
