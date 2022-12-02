import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TopBarStyled, TopBarStyledPositioned } from "./TopBar.styled";

import Links from "../../constants/links/Links";

import { TfiAngleDown } from "react-icons/tfi";
import { HiOutlineUser } from "react-icons/hi";

import flag from "./images/flag-usa.png";

import Currencies from "../Currencies/Currencies";
import Languages from "../Languages/Languages";

const TopBar: React.FC<{
  toggleLogin: () => void;
  toggleRegister: () => void;
}> = ({ toggleLogin, toggleRegister }) => {
  const [toggleCurr, setToggleCur] = useState(false);
  const [toggleLangs, setToggleLangs] = useState(false);

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
        <span no-hover="" onClick={() => setToggleCur(!toggleCurr)}>
          {" "}
          $<TfiAngleDown />
        </span>
        <Currencies active={toggleCurr} />
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
