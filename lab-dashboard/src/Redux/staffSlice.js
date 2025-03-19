import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Dr. Sarah Johnson", role: "Pathologist" },
    { id: 2, name: "Dr. Mike Reynolds", role: "Radiologist" },
  ],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaff: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    removeStaff: (state, action) => {
      state.list = state.list.filter((staff) => staff.id !== action.payload);
    },
  },
});

export const { addStaff, removeStaff } = staffSlice.actions;
export default staffSlice.reducer;
