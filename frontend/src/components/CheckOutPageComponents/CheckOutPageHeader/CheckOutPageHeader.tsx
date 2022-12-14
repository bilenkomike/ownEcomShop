import Alert from "components/Alert/Alert";
import Title from "components/Title/Title";
import Links from "constants/links/Links";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CheckoutPageHeaderStyled } from "./CheckOutPageHeader.styled";

const CheckOutPageHeader = () => {
  return (
    <CheckoutPageHeaderStyled>
      <div>
        <Title>Checkout</Title>

        <Link to="/">Back to shopping</Link>
      </div>
      <Alert variant="success">
        <AiOutlineUser /> Already have an account? {"  "}
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Sign in
        </span>
        {"  "}
        for faster checkout experience
      </Alert>
    </CheckoutPageHeaderStyled>
  );
};

export default CheckOutPageHeader;
