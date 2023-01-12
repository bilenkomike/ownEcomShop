import React, { useEffect, useState } from "react";
import { CurrenciesStyled, CurrenciesStyledItem } from "./Currencies.styled";
import axios from "axios";
import API_URL from "config";

const Currencies: React.FC<{ active: boolean }> = ({ active }) => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "currencies/").then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  return currencies.length > 0 ? (
    <CurrenciesStyled active={active}>
      {currencies.map((currency: { currency: string; symbol: string }) => (
        <CurrenciesStyledItem key={currency.currency}>
          {currency.symbol} {currency.currency}
        </CurrenciesStyledItem>
      ))}

      {/* <CurrenciesStyledItem>€ EUR</CurrenciesStyledItem>
        <CurrenciesStyledItem>₴ UAH</CurrenciesStyledItem> */}
    </CurrenciesStyled>
  ) : (
    <></>
  );
};

export default Currencies;
