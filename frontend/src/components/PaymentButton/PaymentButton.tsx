import React from "react";
import { PaymentButtonStyled } from "./PaymentButton.styled";
import paypal from "./images/paypal.svg";
import visa from "./images/visa.svg";
import mastercard from "./images/mastercard.svg";

const PaymentButton: React.FC<{ type: "visa" | "mastercard" | "paypal" }> = ({
  type,
}) => {
  return (
    <PaymentButtonStyled type="button">
      {type === "paypal" && <img src={paypal} alt="paypal" />}
      {type === "visa" && <img src={visa} alt="visa" />}
      {type === "mastercard" && (
        <>
          <img src={mastercard} alt="mastercard" style={{ width: "40%" }} />
          MasterCard
        </>
      )}
    </PaymentButtonStyled>
  );
};

export default PaymentButton;
