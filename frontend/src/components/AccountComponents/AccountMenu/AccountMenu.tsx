import Links from "constants/links/Links";
import path from "path";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  AccountMenuStyled,
  AccountMenuStyledHeader,
  AccountMenuStyledList,
  AccountMenuStyledListItem,
} from "./AccountMenu.styled";

import { BsPerson, BsBag, BsHeart, BsEye, BsStar } from "react-icons/bs";

import { IoIosLogOut } from "react-icons/io";

const AccountMenu = () => {
  const { pathname } = useLocation();
  return (
    <AccountMenuStyled>
      <AccountMenuStyledHeader>
        <h3>Bilenko Mike</h3>
        <p>annetteb@example.com</p>
      </AccountMenuStyledHeader>
      <AccountMenuStyledList>
        <AccountMenuStyledListItem
          to={Links.accountProfile}
          active={pathname.includes("/profile")}
        >
          <BsPerson />
          My profile
        </AccountMenuStyledListItem>
        <AccountMenuStyledListItem
          to={Links.accountOrders}
          active={pathname.includes("/orders")}
        >
          <BsBag />
          My orders
        </AccountMenuStyledListItem>
        <AccountMenuStyledListItem
          to={Links.accountWislist}
          active={pathname.includes("/wishlist")}
        >
          <span>
            <BsStar />
            Wishlist
          </span>
          <span>2</span>
        </AccountMenuStyledListItem>
        <AccountMenuStyledListItem
          to={Links.accountRecent}
          active={pathname.includes("/recent")}
        >
          <BsEye />
          Recently viewed
        </AccountMenuStyledListItem>

        <AccountMenuStyledListItem
          to={Links.accountRviews}
          active={pathname.includes("/reviews")}
        >
          <BsStar />
          My reviews
        </AccountMenuStyledListItem>

        <AccountMenuStyledListItem
          to={Links.accountProfile}
          active={pathname.includes("/logout")}
        >
          <IoIosLogOut />
          Sign out
        </AccountMenuStyledListItem>
      </AccountMenuStyledList>
    </AccountMenuStyled>
  );
};

export default AccountMenu;
