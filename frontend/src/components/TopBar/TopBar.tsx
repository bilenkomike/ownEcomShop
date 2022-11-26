import React from "react";
import { Link } from "react-router-dom";

import { TopBarStyled, TopBarStyledPositioned } from "./TopBar.styled";

import Links from "../../constants/links/Links";

const TopBar: React.FC = () => {
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
        <span>Eng</span> /<span> $</span>
        <span>Log in</span> / <span>Register</span>
      </TopBarStyledPositioned>
    </TopBarStyled>
  );
};

export default TopBar;
