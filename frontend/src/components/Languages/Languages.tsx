import React from "react";
import { LanguagesStyled, LanguagesStyledItem } from "./Languages.styled";
import usaFlag from "./images/flag-usa.png";
import ukraineFlag from "./images/flag-ukraine.png";

const Languages: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <LanguagesStyled active={active}>
      <LanguagesStyledItem>
        <img src={usaFlag} alt="usaFlag" />
        Eng
      </LanguagesStyledItem>
      <LanguagesStyledItem>
        <img src={ukraineFlag} alt="ukraineFlag" />
        Ukr
      </LanguagesStyledItem>
    </LanguagesStyled>
  );
};

export default Languages;
