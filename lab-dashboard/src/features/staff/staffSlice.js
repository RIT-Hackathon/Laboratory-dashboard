// src/features/staff/staffSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStaffList, addStaffMember, deleteStaffMember } from '../staff/services/staffService';

export const getStaffList = createAsyncThunk('staff/getStaffList', async () => {
  const response = await fetchStaffList();
  return response.data;
});

export const createStaff = createAsyncThunk('staff/createStaff', async (staffData) => {
  const response = await addStaffMember(staffData);
  return response.data;
});

export const removeStaff = createAsyncThunk('staff/removeStaff', async (id) => {
  await deleteStaffMember(id);
  return id;
});

const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    staffList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStaffList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStaffList.fulfilled, (state, action) => {
        state.staffList = action.payload;
        state.loading = false;
      })
      .addCase(getStaffList.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createStaff.fulfilled, (state, action) => {
        state.staffList.push(action.payload);
      })
      .addCase(removeStaff.fulfilled, (state, action) => {
        state.staffList = state.staffList.filter(staff => staff.id !== action.payload);
      });
  },
});

export default staffSlice.reducer;
