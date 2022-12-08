import React, { useState } from "react";
import { HeaderStyled } from "./Header.styled";
import MainMenu from "components/MainMenu/MainMenu";
import TopBar from "components/TopBar/TopBar";
import SpecialOffers from "components/SpecialOffers/SpecialOffers";
import MegaMenu from "components/MegaMenu/MegaMenu";

const Header: React.FC<{
  toggleBackDrop: () => void;
  togglebackDropLogin: () => void;
  togglebackDropRegister: () => void;
}> = ({ toggleBackDrop, togglebackDropLogin, togglebackDropRegister }) => {
  const [megamenu, setMegamenu] = useState(false);
  const toggleMegaMenu = () => {
    setMegamenu(!megamenu);
    toggleBackDrop();
  };

  return (
    <HeaderStyled>
      <TopBar
        toggleLogin={togglebackDropLogin}
        toggleRegister={togglebackDropRegister}
      />
      <MainMenu toggle={toggleMegaMenu} />
      <MegaMenu active={megamenu} />
      <SpecialOffers />
    </HeaderStyled>
  );
};

export default Header;
