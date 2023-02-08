import { createSlice } from "@reduxjs/toolkit";

const backdropSlice = createSlice({
  name: "backdropSlice",
  initialState: {
    open: false,
  },
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export default backdropSlice;
export const { toggle: backdropToggle } = backdropSlice.actions;
