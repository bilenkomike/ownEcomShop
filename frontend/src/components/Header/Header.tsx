import React, { useState, useEffect } from "react";
import { HeaderStyled } from "./Header.styled";
import MainMenu from "components/MainMenu/MainMenu";
import TopBar from "components/TopBar/TopBar";
import SpecialOffers from "components/SpecialOffers/SpecialOffers";
import MegaMenu from "components/MegaMenu/MegaMenu";
import axios from "axios";
import API_URL from "config";

import { useTypedDispatch } from "store/hooks";
import { backdropToggle } from "store/backdropSlice/backdropSlice";

type MenuDataType = {
  id: number;
  name: string;
  categories: {
    id: number;
    name: string;
    type: number;
    subbcategories:
      | {
          id: number;
          name: string;
          catergory: number;
        }[]
      | [];
  }[];
};
type MainMenuDataType = {
  id: number;
  name: string;
};

const Header: React.FC<{
  toggleBackDrop: () => void;
  togglebackDropLogin: () => void;
  togglebackDropRegister: () => void;
}> = ({ toggleBackDrop, togglebackDropLogin, togglebackDropRegister }) => {
  const [megamenu, setMegamenu] = useState(false);

  const [type, setType] = useState("");
  const [menuData, setMenuData] = useState<MenuDataType[] | null>(null);
  const [mainMenuData, setMainMenuData] = useState<MainMenuDataType[] | null>(
    null
  );

  useEffect(() => {
    axios
      .get(API_URL.concat("products/megamenu/"))
      .then((response) => {
        setMenuData(response.data);
        setMainMenuData(
          response.data.map((item: any) => {
            return { name: item.name, id: item.id };
          })
        );
      })
      .catch((e) => {
        console.error("NETWORK LAGS");
      });
  }, []);

  const toggleMegaMenu = (open: boolean) => {
    backdropToggle();
  };

  const setTypeValue = (typeVal: string) => {
    setType(typeVal);
  };

  return (
    <HeaderStyled onClick={() => megamenu && toggleMegaMenu(false)}>
      <TopBar
        toggleLogin={togglebackDropLogin}
        toggleRegister={togglebackDropRegister}
      />
      {mainMenuData !== null && (
        <MainMenu
          setType={setTypeValue}
          type={type}
          toggle={toggleMegaMenu}
          data={mainMenuData}
        />
      )}

      {menuData !== null && (
        <MegaMenu type={type} data={menuData} active={megamenu} />
      )}
      <SpecialOffers />
    </HeaderStyled>
  );
};

export default Header;
