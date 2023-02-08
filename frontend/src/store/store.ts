import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice/index";
import currenciesSlice from "./CurrenciesSlice/currencies-slice";
import backdropSlice from "./backdropSlice/backdropSlice";

const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer,
    [currenciesSlice.name]: currenciesSlice.reducer,
    [backdropSlice.name]: backdropSlice.reducer,
  },
});

console.log(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
