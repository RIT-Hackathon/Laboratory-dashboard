import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
  name: "staff",
  initialState: { list: [] },
  reducers: {
    addStaff: (state, action) => {
      state.list.push(action.payload);
    },
    removeStaff: (state, action) => {
      state.list = state.list.filter((staff) => staff.id !== action.payload);
    },
  },
});

export const { addStaff, removeStaff } = staffSlice.actions;
export default staffSlice.reducer;
