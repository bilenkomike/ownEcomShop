import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  TopBarStyled,
  TopBarStyledPositioned,
  TopBarStyledAngle,
} from "./TopBar.styled";

// import Links from "constants/links/Links";
import Links from "utils/routes/Links";

import { TfiAngleDown } from "react-icons/tfi";
import { HiOutlineUser } from "react-icons/hi";

import flag from "./images/flag-usa.png";

import Currencies from "components/Currencies/Currencies";
import Languages from "components/Languages/Languages";

import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { toggleListCurrencies } from "store/CurrenciesSlice/currencies-slice";
import { unSetUser } from "components/AuthComponents/Login/store/useAuth";

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
  const navigate = useNavigate();
  const currency = useTypedSelector(
    (state) => state.currencies.selectedCurrency
  );
  const open = useTypedSelector((state) => state.currencies.open);
  const user = useTypedSelector((state) => state.authSlice);

  const logout = () => {
    dispatch(unSetUser());
    navigate("/");
  };

  console.log(user);

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
          {user.username.length <= 0 && (
            <>
              <span onClick={toggleLogin}>Log in</span>/
              <span onClick={toggleRegister}>Register</span>
            </>
          )}
          {user.username.length > 0 && (
            <>
              <Link to={Links.accountProfile}>Account</Link>/
              <span onClick={logout}>Logout</span>
            </>
          )}
        </span>
      </TopBarStyledPositioned>
    </TopBarStyled>
  );
};

export default TopBar;
