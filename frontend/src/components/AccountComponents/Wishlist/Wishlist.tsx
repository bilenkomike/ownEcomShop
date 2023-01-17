import React from "react";
import AccountHeader from "../AccountHeader/AccountHeader";
import { TbTrash } from "react-icons/tb";
import {
  WishlistStyled,
  WishlistStyledHeaderItem,
  WishlistStyledList,
} from "./Wishlist.styled";
import Product from "components/Product/Product";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";

const Wishlist = () => {
  return (
    <WishlistStyled>
      <AccountHeader title="Wishlist">
        <WishlistStyledHeaderItem>
          <TbTrash /> Delete all
        </WishlistStyledHeaderItem>
      </AccountHeader>
      <WishlistStyledList>
        {/* <Product
          size="large"
          id="some"
          name="Shirt with insertion lace trims"
          gallary={[img1]}
          price={49.95}
          currency="$"
        />
        <Product
          size="large"
          id="some"
          name="Shirt with insertion lace trims"
          gallary={[img2]}
          price={49.95}
          currency="$"
        />
        <Product
          size="large"
          id="some"
          name="Shirt with insertion lace trims"
          gallary={[img2]}
          price={49.95}
          currency="$"
        /> */}
      </WishlistStyledList>
    </WishlistStyled>
  );
};

export default Wishlist;
