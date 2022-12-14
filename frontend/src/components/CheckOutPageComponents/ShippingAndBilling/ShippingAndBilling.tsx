import CheckBox from "components/CheckBox/CheckBox";
import Input from "components/Input/Input";
import React from "react";

import {
  ShippingAndBillingStyled,
  ShippingAndBillingStyledForm,
  ShippingAndBillingStyledFormGroup,
  ShippingAndBillingStyledHeader,
} from "./ShippingAndBilling.styled";
const ShippingAndBilling = () => {
  return (
    <ShippingAndBillingStyled>
      <ShippingAndBillingStyledHeader>
        2. Shipping & Billing Address
      </ShippingAndBillingStyledHeader>
      <ShippingAndBillingStyledForm>
        <ShippingAndBillingStyledFormGroup>
          <Input
            name="first-name"
            type="text"
            variant="large"
            onChange={(e) => console.log(e)}
            label="First Name"
            placeholder="Your first name"
          />
          <Input
            name="email"
            type="email"
            variant="large"
            onChange={(e) => console.log(e)}
            label="Email"
            placeholder="Your working Email"
          />
          <Input
            name="country"
            type="select"
            icon="select"
            variant="large"
            onChange={(e) => console.log(e)}
            label="Country"
            placeholder="Choose your country"
          />
          <Input
            name="address"
            type="text"
            variant="large"
            onChange={(e) => console.log(e)}
            label="Address"
            placeholder="Your address"
          />
          <CheckBox text="Billing and Shipping details are the same" />
        </ShippingAndBillingStyledFormGroup>
        <ShippingAndBillingStyledFormGroup>
          <Input
            name="last-name"
            type="text"
            variant="large"
            onChange={(e) => console.log(e)}
            label="Last Name"
            placeholder="Your last name"
          />
          <Input
            name="phone"
            type="text"
            variant="large"
            onChange={(e) => console.log(e)}
            label="Phone"
            placeholder="Your phone number"
          />
          <Input
            name="city"
            type="select"
            icon="select"
            variant="large"
            onChange={(e) => console.log(e)}
            label="City"
            placeholder="Choose your city"
          />
          <Input
            name="zip-code"
            type="text"
            variant="large"
            onChange={(e) => console.log(e)}
            label="ZIP Code"
            placeholder="Your ZIP code"
          />
        </ShippingAndBillingStyledFormGroup>
      </ShippingAndBillingStyledForm>
    </ShippingAndBillingStyled>
  );
};

export default ShippingAndBilling;
