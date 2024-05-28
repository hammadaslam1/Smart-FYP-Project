import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
};

const LinkReducer = createSlice({
  name: "links",
  initialState,
  reducers: {
    toggleLink: (state, action) => {
      state.links = action.payload;
      console.log(action.payload);
    },
  },
});

export const { toggleLink } = LinkReducer.actions;

export default LinkReducer.reducer;
