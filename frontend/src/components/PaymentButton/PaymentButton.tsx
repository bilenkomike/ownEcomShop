import React from "react";
import { PaymentButtonStyled } from "./PaymentButton.styled";
import paypal from "./images/paypal.png";
import visa from "./images/visa.png";
import mastercard from "./images/mastercard.png";

const PaymentButton: React.FC<{ type: "visa" | "mastercard" | "paypal" }> = ({
  type,
}) => {
  return (
    <PaymentButtonStyled>
      {type === "paypal" && <img src={paypal} alt="paypal" />}
      {type === "visa" && <img src={visa} alt="visa" />}
      {type === "mastercard" && <img src={mastercard} alt="mastercard" />}
    </PaymentButtonStyled>
  );
};

export default PaymentButton;
