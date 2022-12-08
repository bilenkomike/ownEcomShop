import React, { useState } from "react";
// import { CartActions } from "../../store/CartSlice";
// import { useTypedDispatch, useTypedSelector } from "../../store/hooks";
import img from "./images/image.png";

import { BiTrash } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import {
  MiniCartStyledListItem,
  MiniCartStyledListItemImage,
  MiniCartStyledListItemContent,
  MiniCartStyledListItemTitle,
  MiniCartStyledListItemAttributes,
  MiniCartStyledListItemAttributesItem,
  MiniCartStyledListPriceBlock,
  MiniCartStyledPrice,
  MiniCartStyledPriceSaleFrom,
  MiniCartStyledPriceText,
  MiniCartStyledListItemRemoveButton,
  MiniCartStyledListItemWishList,
} from "./MiniCart.styled";
import Input from "components/Input/Input";

const MiniCartItem: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <MiniCartStyledListItem>
      <MiniCartStyledListItemImage
        src={img}
        alt="Basic hooded sweatshirt in pink"
      />
      <MiniCartStyledListItemContent>
        <MiniCartStyledListItemTitle>
          Basic hooded sweatshirt in pink
        </MiniCartStyledListItemTitle>
        <MiniCartStyledListItemAttributes>
          <MiniCartStyledListItemAttributesItem>
            Color: <span>pink</span>
          </MiniCartStyledListItemAttributesItem>
          <MiniCartStyledListItemAttributesItem>
            Size: <span>S</span>
          </MiniCartStyledListItemAttributesItem>
        </MiniCartStyledListItemAttributes>
        <MiniCartStyledListPriceBlock>
          <Input
            name="product-counter"
            variant="small"
            type="number"
            value={counter}
            onChange={(number) => setCounter(Number(number))}
          />
          <MiniCartStyledPrice>
            <MiniCartStyledPriceText sale={true}>
              {/* sale={sale > 0} */}
              $15.50
              {/* {sale === 0 && `${currency} ${price}`} */}
              {/* {sale > 0 &&
                `${currency} ${(price - (price * sale) / 100).toFixed(2)}`} */}
            </MiniCartStyledPriceText>

            <MiniCartStyledPriceSaleFrom>
              $31.00
              {/* {currency}
                {price} */}
            </MiniCartStyledPriceSaleFrom>
            {/* {sale > 0 && (
              
            )} */}
          </MiniCartStyledPrice>
        </MiniCartStyledListPriceBlock>

        <MiniCartStyledListItemWishList active>
          Move to
          {true && <AiFillHeart />}
          {false && <AiOutlineHeart />}
        </MiniCartStyledListItemWishList>
      </MiniCartStyledListItemContent>
      <MiniCartStyledListItemRemoveButton>
        <BiTrash />
      </MiniCartStyledListItemRemoveButton>
    </MiniCartStyledListItem>
  );
};

export default MiniCartItem;
