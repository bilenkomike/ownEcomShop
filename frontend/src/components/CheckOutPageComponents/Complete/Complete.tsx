import Button from "components/Button/Button";
import React from "react";
import {
  CompleteStyled,
  CompleteStyledContent,
  CompleteStyledFooter,
  CompleteStyledHeader,
  CompleteStyledInner,
} from "./Complete.styled";

const Complete = () => {
  return (
    <CompleteStyled>
      <CompleteStyledInner>
        <CompleteStyledHeader>Order totals</CompleteStyledHeader>
        <CompleteStyledContent>
          <li>
            <span>
              <strong>Subtotal:</strong>
            </span>
            <span>
              <strong>$198.65</strong>
            </span>
          </li>

          <li>
            <span>Shipping costs:</span>
            <span>$25.00</span>
          </li>
          <li>
            <span>Discount:</span>
            <span>—</span>
          </li>

          <li>
            <span>Estimated sales tax:</span>
            <span>$6.35</span>
          </li>
        </CompleteStyledContent>
        <CompleteStyledFooter>
          <span>Order total:</span>
          <span>$230.00</span>
        </CompleteStyledFooter>
      </CompleteStyledInner>
      <Button type="submit" styleType="default" size="large" variant="solid">
        Complete Order
      </Button>
    </CompleteStyled>
  );
};

export default Complete;
