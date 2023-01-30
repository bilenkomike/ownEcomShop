import Links from "constants/links/Links";
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
          <span>
            <BsPerson />
            My profile
          </span>
        </AccountMenuStyledListItem>
        <AccountMenuStyledListItem
          to={Links.accountOrders}
          active={pathname.includes("/orders")}
        >
          <span>
            <BsBag />
            My orders
          </span>
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
          <span>
            <BsEye />
            Recently viewed
          </span>
        </AccountMenuStyledListItem>

        <AccountMenuStyledListItem
          to={Links.accountReviews}
          active={pathname.includes("/reviews")}
        >
          <span>
            <BsStar />
            My reviews
          </span>
        </AccountMenuStyledListItem>

        <AccountMenuStyledListItem
          to={Links.accountProfile}
          active={pathname.includes("/logout")}
        >
          <span>
            <IoIosLogOut />
            Sign out
          </span>
        </AccountMenuStyledListItem>
      </AccountMenuStyledList>
    </AccountMenuStyled>
  );
};

export default AccountMenu;
