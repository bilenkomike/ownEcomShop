import { HeaderStyled } from "./Header.styled";
import React from "react";
import TopBar from "../TopBar/TopBar";

const Header = () => {
  return (
    <HeaderStyled>
      <TopBar />
    </HeaderStyled>
  );
};

export default Header;
