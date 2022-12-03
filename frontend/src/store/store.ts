import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice/index";

const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer,
  },
});

console.log(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
