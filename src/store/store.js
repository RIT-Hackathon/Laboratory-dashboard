import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentReducer from './slices/appointmentSlice';
import notificationReducer from './slices/notificationSlice';
import staffReducer from './slices/staffSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    notifications: notificationReducer,
    staff: staffReducer,
  },
});

export default store;
