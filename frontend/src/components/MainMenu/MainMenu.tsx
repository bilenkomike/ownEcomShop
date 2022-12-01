import React, { useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../constants/ui/colors/Colors";
import Input from "../Input/Input";
import {
  MainMenuStyled,
  MainMenuActions,
  MainMenuActionsDivider,
  MainMenuMiniCartCounter,
  MainMenuLinks,
  MainMenuForm,
  MainMenuSearchButton,
} from "./MainMenu.styled";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import Links from "../../constants/links/Links";

const MainMenu: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const [search, setSearch] = useState("");
  const searchSubmitHandler: (e: React.FormEvent) => void = (e) => {
    e.preventDefault();
    if (search.trim().length <= 0) {
      return;
    }
    setSearch("");
    // searchp
    console.warn(search);
  };
  const updateSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  return (
    <MainMenuStyled>
      <Link to="/">
        <img src="/images/logo.png" alt="" />
      </Link>
      <MainMenuLinks>
        <span className="active" onClick={toggle}>
          Women
        </span>
        <span onClick={toggle}>Men</span>
        <span onClick={toggle}>Girls</span>
        <span onClick={toggle}>Boys</span>
        <span onClick={toggle} style={{ color: Colors.danger }}>
          Sale
        </span>
      </MainMenuLinks>

      <MainMenuForm onSubmit={searchSubmitHandler}>
        <Input
          variant="default"
          type="text"
          placeholder="Some text..."
          onChange={updateSearch}
          value={search}
        />
        <MainMenuSearchButton type="submit">
          <AiOutlineSearch />
        </MainMenuSearchButton>
      </MainMenuForm>

      <MainMenuActions>
        <Link to={Links.wishlist}>
          <AiOutlineHeart />2
        </Link>

        <MainMenuActionsDivider />
        <span>
          <AiOutlineShoppingCart />
          <MainMenuMiniCartCounter>4</MainMenuMiniCartCounter>
        </span>
      </MainMenuActions>
    </MainMenuStyled>
  );
};

export default MainMenu;
