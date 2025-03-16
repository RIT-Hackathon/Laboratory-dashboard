import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffList: [],
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setStaffList: (state, action) => {
      state.staffList = action.payload;
    },
  },
});

export const { setStaffList } = staffSlice.actions;
export default staffSlice.reducer;
