import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice/index";
import currenciesSlice from "./CurrenciesSlice/currencies-slice";
import backdropSlice from "./backdropSlice/backdropSlice";
import useAuth from "../components/AuthComponents/Login/store/useAuth";

const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer,
    [currenciesSlice.name]: currenciesSlice.reducer,
    [backdropSlice.name]: backdropSlice.reducer,
    [useAuth.name]: useAuth.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
