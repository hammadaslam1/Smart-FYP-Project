import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
      console.log(state.student);
    },
  },
});

export const {
  setStudent
} = studentSlice.actions;

export default studentSlice.reducer;
