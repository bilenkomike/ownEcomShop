import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Colors from "constants/ui/colors/Colors";
import Input from "components/Input/Input";
import {
  MainMenuStyled,
  MainMenuActions,
  MainMenuActionsDivider,
  MainMenuMiniCartCounter,
  MainMenuLinks,
  MainMenuForm,
} from "./MainMenu.styled";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Links from "constants/links/Links";

import { useTypedDispatch } from "store/hooks";
import { CartActions } from "store/CartSlice/index";

const MainMenu: React.FC<{
  toggle: (open: boolean) => void;
  data: { name: string; id: number }[];
  setType: (value: string) => void;
  type: string;
}> = ({ toggle, data, setType, type }) => {
  const dispatch = useTypedDispatch();
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
      <MainMenuLinks onClick={() => toggle(true)}>
        {data &&
          data.map((link: { id: number; name: string }) => (
            <span
              key={link.name}
              onClick={() => setType(link.name)}
              className={link.name === type ? "active" : ""}
            >
              {link.name}
            </span>
          ))}
        <span onClick={() => toggle(true)} style={{ color: Colors.danger }}>
          Sale
        </span>
      </MainMenuLinks>

      <MainMenuForm onSubmit={searchSubmitHandler}>
        <Input
          name="mainsearchbar"
          variant="default"
          type="text"
          placeholder="Some text..."
          onChange={updateSearch}
          value={search}
          icon="search"
          iconTypes="submit"
        />
      </MainMenuForm>

      <MainMenuActions>
        <Link to={Links.accountWislist}>
          <AiOutlineHeart />2
        </Link>

        <MainMenuActionsDivider />
        <span onClick={() => dispatch(CartActions.miniCartActiveToggle())}>
          <AiOutlineShoppingCart />
          <MainMenuMiniCartCounter>4</MainMenuMiniCartCounter>
        </span>
      </MainMenuActions>
    </MainMenuStyled>
  );
};

export default MainMenu;
