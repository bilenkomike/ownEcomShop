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

import axios from "axios";
import API_URL from "config";

const MainMenu: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const [links, setLinks] = useState([]);
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

  useEffect(() => {
    axios.get(API_URL + "products/types/").then((response) => {
      setLinks(response.data);
    });
  }, []);

  return (
    <MainMenuStyled>
      <Link to="/">
        <img src="/images/logo.png" alt="" />
      </Link>
      <MainMenuLinks onMouseEnter={toggle}>
        {/* onMouseEnter={toggle} */}
        {links &&
          links.map((link: { id: number; name: string }) => (
            <span key={link.name}>{link.name}</span>
          ))}
        {/* <span className="active" onMouseEnter={toggle}>
          Women
        </span>
        <span onMouseEnter={toggle}>Men</span>
        <span onMouseEnter={toggle}>Girls</span>
        <span onMouseEnter={toggle}>Boys</span> */}
        <span onMouseEnter={toggle} style={{ color: Colors.danger }}>
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
