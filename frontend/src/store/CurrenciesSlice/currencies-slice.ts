import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "typescript-cookie";

import axios from "axios";
import API_URL from "config";

export const fetchCurrencies = createAsyncThunk(
  "api/currencies",

  async () => {
    const response = await axios.get(API_URL.concat("currencies/"));
    return await response.data;
  }
);

type CurrencyType = {
  currency: string;
  symbol: string;
};
const currencies: CurrencyType[] = [];

const selectedCurrency: CurrencyType | null =
  getCookie("currency") !== undefined
    ? JSON.parse(getCookie("currency")!)
    : null;

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    loading: true,
    selectedCurrency: selectedCurrency,
    currencies: currencies,
    open: false,
  },
  reducers: {
    selectCurrency: (state, action) => {
      const symbol = action.payload.symbol;

      state.selectedCurrency = state.currencies.filter(
        (currency: CurrencyType) => currency!.symbol === symbol
      )[0];

      setCookie(
        "currency",
        JSON.stringify(
          state.currencies.filter(
            (currency: CurrencyType) => currency!.symbol === symbol
          )[0]
        )
      );
    },
    open: (state) => {
      state.open = !state.open;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
      if (!state.selectedCurrency) {
        state.selectedCurrency = action.payload[0];

        setCookie("currency", JSON.stringify(action.payload[0]));
      }
    });
  },
});

export default currenciesSlice;

export const { selectCurrency, open: toggleListCurrencies } =
  currenciesSlice.actions;
