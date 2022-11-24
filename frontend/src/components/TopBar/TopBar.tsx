import React from "react";
import { Link } from "react-router-dom";

import { TopBarStyled, TopBarStyledPositioned } from "./TopBar.styled";

const TopBar = () => {
  return (
    <TopBarStyled>
      <TopBarStyledPositioned>
        <a href="tel:+(405) 555-0128">Available 24/7 at (405) 555-0128</a>
      </TopBarStyledPositioned>

      <TopBarStyledPositioned centered={true}>
        <Link to="/deliver-return">Delivery & returns</Link>
        <Link to="/track-order">Track order</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacts">Contacts</Link>
      </TopBarStyledPositioned>
      <TopBarStyledPositioned>
        <span>Eng</span> /<span> $</span>
        <span>Log in</span> / <span>Register</span>
      </TopBarStyledPositioned>
    </TopBarStyled>
  );
};

export default TopBar;

//
// Delivery & returns
// Track order
// Blog
// Contacts
// Eng / $
// Log in / Register
