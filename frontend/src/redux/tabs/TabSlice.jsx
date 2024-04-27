import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: 0,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    toggleTab: (state, action) => {
      state.tabs = action.payload;
    },
  },
});

export const { toggleTab } = tabSlice.actions;

export default tabSlice.reducer;