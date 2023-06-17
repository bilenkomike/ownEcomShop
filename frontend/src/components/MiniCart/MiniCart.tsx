import React from "react";
import { CartActions } from "store/CartSlice";
import { useTypedDispatch, useTypedSelector } from "store/hooks";

import {
  MiniCartStyled,
  MiniCartStyledContent,
  MiniCartStyledHeader,
  MiniCartStyledInnerContent,
  MiniCartStyledList,
  MiniCartStyledTotal,
  MiniCartStyledTotalText,
  MiniCartStyledInnerColumn,
  MiniCartStyledListInner,
} from "./MiniCart.styled";

import { CgClose } from "react-icons/cg";

import MiniCartItem from "./MiniCartItem";
import Button from "UI/Button/Button";
import { useNavigate } from "react-router-dom";

const MiniCart: React.FC = () => {
  const navigate = useNavigate();
  const miniCartActive = useTypedSelector((state) => state.cart.MiniCartActive);
  const cartCount = useTypedSelector((state) => state.cart.count);
  const dispatch = useTypedDispatch();

  return (
    <MiniCartStyled
      active={miniCartActive}
      onClick={() => dispatch(CartActions.miniCartActiveToggle())}
    >
      <MiniCartStyledInnerContent>
        <MiniCartStyledContent
          active={miniCartActive}
          onClick={(e) => e.stopPropagation()}
        >
          <MiniCartStyledInnerColumn>
            <MiniCartStyledHeader>
              Your cart ({cartCount > 0 ? cartCount : "empty"})
              <CgClose
                onClick={() => dispatch(CartActions.miniCartActiveToggle())}
              />
            </MiniCartStyledHeader>
            <MiniCartStyledListInner>
              <MiniCartStyledList>
                <MiniCartItem />
                <MiniCartItem />
                <MiniCartItem />
                <MiniCartItem />
              </MiniCartStyledList>
            </MiniCartStyledListInner>

            <MiniCartStyledTotal>
              <MiniCartStyledTotalText>
                Subtotal:
                <span>$198.65</span>
              </MiniCartStyledTotalText>
              <Button
                icon="card"
                iconPosition="before"
                styleType="default"
                variant="solid"
                size="large"
                type="button"
                onClick={() => {
                  dispatch(CartActions.miniCartActiveToggle());
                  navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </MiniCartStyledTotal>
          </MiniCartStyledInnerColumn>
        </MiniCartStyledContent>
      </MiniCartStyledInnerContent>
    </MiniCartStyled>
  );
};

export default MiniCart;
