import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  MiniCartActive: boolean;
  count: number;
};

const initialState: InitialState = {
  MiniCartActive: false,
  count: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    miniCartActiveToggle: (state) => {
      state.MiniCartActive = !state.MiniCartActive;
      document.body.classList.toggle("no-scroll");
    },
  },
});

export default CartSlice;

export const CartActions = CartSlice.actions;
