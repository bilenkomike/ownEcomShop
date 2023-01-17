import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice/index";
import currenciesSlice from "./CurrenciesSlice/currencies-slice";

const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer,
    [currenciesSlice.name]: currenciesSlice.reducer,
  },
});

console.log(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
