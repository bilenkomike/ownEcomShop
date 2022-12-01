import React from "react";
import { CurrenciesStyled, CurrenciesStyledItem } from "./Currencies.styled";

const Currencies: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <CurrenciesStyled active={active}>
      <CurrenciesStyledItem>$ USD</CurrenciesStyledItem>
      <CurrenciesStyledItem>€ EUR</CurrenciesStyledItem>
      <CurrenciesStyledItem>₴ UAH</CurrenciesStyledItem>
    </CurrenciesStyled>
  );
};

export default Currencies;
