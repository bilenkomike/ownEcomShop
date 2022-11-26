import { HeaderStyled } from "./Header.styled";
import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import TopBar from "../TopBar/TopBar";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import MegaMenu from "../MegaMenu/MegaMenu";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <TopBar />
      <MainMenu />
      <MegaMenu />
      <SpecialOffers />
    </HeaderStyled>
  );
};

export default Header;
