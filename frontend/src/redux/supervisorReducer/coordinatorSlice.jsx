import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coordinator: null,
};

const coordinatorSlice = createSlice({
  name: "coordinator",
  initialState,
  reducers: {
    setCoordinator: (state, action) => {
      state.coordinator = action.payload;
      console.log(state.coordinator);
    },
  },
});

export const {
  setCoordinator,
} = coordinatorSlice.actions;

export default coordinatorSlice.reducer;
