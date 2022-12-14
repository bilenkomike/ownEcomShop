import RadioButton from "components/RadioButton/RadioButton";
import React from "react";

import {
  ShippingStyled,
  ShippingStyledHeader,
  ShippingStyledList,
  ShippingStyledListItem,
} from "./Shipping.styled";

const Shipping = () => {
  return (
    <ShippingStyled>
      <ShippingStyledHeader>3. Shipping Method</ShippingStyledHeader>

      <ShippingStyledList>
        <ShippingStyledListItem>
          <span>
            <RadioButton
              name="shipping"
              value="25.00"
              label="Courier to your address"
            />
            <span>Estimated date: September 9</span>
          </span>
          $25.00
        </ShippingStyledListItem>
        <ShippingStyledListItem>
          <span>
            <RadioButton
              name="shipping"
              value="00.00"
              label="Pick up from store"
            />
            <span>Pick up on September 8 from 12:00</span>
          </span>
          Free
        </ShippingStyledListItem>
        <ShippingStyledListItem>
          <span>
            <RadioButton
              name="shipping"
              value="10.00"
              label="UPS Ground Shipping"
            />
            <span>Up to one week</span>
          </span>
          $10.00
        </ShippingStyledListItem>
        <ShippingStyledListItem>
          <span>
            <RadioButton
              name="shipping"
              value="8.50"
              label="Pick up at Createx Locker"
            />
            <span>Pick up on September 8 from 12:00</span>
          </span>
          $8.50
        </ShippingStyledListItem>

        <ShippingStyledListItem>
          <span>
            <RadioButton
              name="shipping"
              value="15.00"
              label="Createx Global Export"
            />
            <span>3-4 days</span>
          </span>
          $15.00
        </ShippingStyledListItem>
      </ShippingStyledList>
    </ShippingStyled>
  );
};

export default Shipping;
