import React, { useEffect, useState } from "react";
import { CurrenciesStyled, CurrenciesStyledItem } from "./Currencies.styled";
import {
  fetchCurrencies,
  selectCurrency,
  toggleListCurrencies,
} from "store/CurrenciesSlice/currencies-slice";
import { useTypedDispatch, useTypedSelector } from "store/hooks";

const Currencies: React.FC = () => {
  const currencies = useTypedSelector((state) => state.currencies.currencies);
  const active = useTypedSelector((state) => state.currencies.open);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleCurrencyClick = (symbol: string) => {
    dispatch(selectCurrency({ symbol }));
    dispatch(toggleListCurrencies());
  };

  return currencies.length > 0 ? (
    <CurrenciesStyled active={active} data-testid="resolved">
      {currencies.map((currency: { currency: string; symbol: string }) => (
        <CurrenciesStyledItem
          key={currency.currency}
          onClick={() => handleCurrencyClick(currency.symbol)}
        >
          {currency.symbol} {currency.currency}
        </CurrenciesStyledItem>
      ))}
    </CurrenciesStyled>
  ) : (
    <></>
  );
};

export default Currencies;
