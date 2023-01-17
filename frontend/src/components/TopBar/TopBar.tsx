import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  TopBarStyled,
  TopBarStyledPositioned,
  TopBarStyledAngle,
} from "./TopBar.styled";

import Links from "constants/links/Links";

import { TfiAngleDown } from "react-icons/tfi";
import { HiOutlineUser } from "react-icons/hi";

import flag from "./images/flag-usa.png";

import Currencies from "components/Currencies/Currencies";
import Languages from "components/Languages/Languages";

import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { toggleListCurrencies } from "store/CurrenciesSlice/currencies-slice";
// import {
//   fetchCurrencies,
//   selectCurrency,
// } from "store/CurrenciesSlice/currencies-slice";

const TopBar: React.FC<{
  toggleLogin: () => void;
  toggleRegister: () => void;
}> = ({ toggleLogin, toggleRegister }) => {
  const [toggleLangs, setToggleLangs] = useState(false);
  const dispatch = useTypedDispatch();
  const currency = useTypedSelector(
    (state) => state.currencies.selectedCurrency
  );
  const open = useTypedSelector((state) => state.currencies.open);

  return (
    <TopBarStyled>
      <TopBarStyledPositioned style={{ textAlign: "left" }}>
        <a href="tel:+(405) 555-0128">Available 24/7 at (405) 555-0128</a>
      </TopBarStyledPositioned>

      <TopBarStyledPositioned centered={true}>
        <Link to={Links.returnDelivery}>Delivery & returns</Link>
        <Link to={Links.trackOrder}>Track order</Link>
        <Link to={Links.blog}>Blog</Link>
        <Link to={Links.contacts}>Contacts</Link>
      </TopBarStyledPositioned>
      <TopBarStyledPositioned style={{ textAlign: "right" }}>
        <span no-hover="" onClick={() => setToggleLangs(!toggleLangs)}>
          <img src={flag} alt="" />
          Eng
          <TfiAngleDown />
        </span>{" "}
        <Languages active={toggleLangs} />/
        <span no-hover="" onClick={() => dispatch(toggleListCurrencies())}>
          {currency !== null ? currency.symbol : ""}
          <TopBarStyledAngle active={open}>
            <TfiAngleDown />
          </TopBarStyledAngle>
        </span>
        <Currencies />
        <span>
          <HiOutlineUser />
          <span onClick={toggleLogin}>Log in</span> /{" "}
          <span onClick={toggleRegister}>Register</span>
        </span>
      </TopBarStyledPositioned>
    </TopBarStyled>
  );
};

export default TopBar;
