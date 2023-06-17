import React, { useEffect, useState } from "react";
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
import { useTypedSelector } from "store/hooks";
import axios from "axios";
import API_URL from "config";

const Wishlist = () => {
  const user = useTypedSelector((state) => state.authSlice);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user.token) {
      axios
        .get(`${API_URL}wishlist/?perPage=4`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setWishlist(response.data);
        });
    }
  }, [user]);

  return (
    <WishlistStyled>
      <AccountHeader title="Wishlist">
        <WishlistStyledHeaderItem>
          <TbTrash /> Delete all
        </WishlistStyledHeaderItem>
      </AccountHeader>
      {wishlist.length > 0 && (
        <WishlistStyledList>
          {/* {wishlist.map((wishitem) => (
            <Product
              size="large"
              id={wishitem.art_no}
              name={wishitem.title}
              gallary={[
                wishitem.image_1,
                wishitem.image_2,
                wishitem.image_3,
                wishitem.image_4,
                wishitem.image_5,
              ]}
              price={wishitem.prices}
              currency="$"
            />
          ))} */}
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
         */}
        </WishlistStyledList>
      )}
    </WishlistStyled>
  );
};

export default Wishlist;
