import Links from "constants/links/Links";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AccountMenuStyled,
  AccountMenuStyledHeader,
  AccountMenuStyledList,
  AccountMenuStyledListItem,
} from "./AccountMenu.styled";

import { BsPerson, BsBag, BsHeart, BsEye, BsStar } from "react-icons/bs";

import { IoIosLogOut } from "react-icons/io";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { unSetUser } from "components/AuthComponents/Login/store/useAuth";
import axios from "axios";
import API_URL from "config";

const AccountMenu = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const user = useTypedSelector((state) => state.authSlice);
  const { pathname } = useLocation();
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token) {
      axios
        .get(`${API_URL}wishlist/`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setWishlistCount(response.data.length);
        });
    }
  }, [user]);

  const logout = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(unSetUser());
    navigate("/");
  };
  return (
    <AccountMenuStyled>
      <AccountMenuStyledHeader>
        <h3>{user.fullname}</h3>
        <p>{user.email}</p>
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
          {wishlistCount > 0 && <span>{wishlistCount}</span>}
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
          onClick={logout}
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
