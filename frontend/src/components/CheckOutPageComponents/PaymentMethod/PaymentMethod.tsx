import RadioButton from "components/RadioButton/RadioButton";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
  useElements,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import {
  PaymentMethodStyled,
  PaymentMethodStyledHeader,
  PaymentMethodStyledItem,
  PaymentMethodStyledCardInputWrapper,
  PaymentMethodStyledInput,
  PaymentMethodStyledItemHeader,
} from "./PaymentMethod.styled";

import styled from "styled-components";
import { PayPalButton } from "react-paypal-button-v2";
import PaymentButton from "components/PaymentButton/PaymentButton";

export interface CreateCardPaymentProps {
  onSuccessCard: (id: string) => void;
}

type PaymentMethodType = "card" | "paypal" | "cash" | "";
// {
//   /* <PaymentMethodType></PaymentMethodType> */
// }
const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  // const elements = useElements();
  const addPaypalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    // AXtqLwrqfSIBuWqJnyjNmknbZ2Ayc_qD-5Rg9oStg0tenP1WP9Qh2cozzOp8CAQ_-ZEOB5Q8UpSq_FG3
    //
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ARRA1TuvbCMOqsrfYkyHsetsQIsOQvh8U2PWCEwsXzv_xNKYxEkxnJavTpHPyJsKETAAoAgNEQJzpm9r";
    script.async = true;
    script.onload = () => {
      console.log("lalalla");
      // setSdkReady(true);
    };

    document.body.appendChild(script);
  };

  return (
    <PaymentMethodStyled>
      <PaymentMethodStyledHeader>4. Payment Method</PaymentMethodStyledHeader>
      <PaymentMethodStyledItem>
        <PaymentMethodStyledItemHeader>
          <RadioButton
            name="payment"
            label="Credit Card"
            value="card"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentMethod(e.target.value)
            }
          />
          <PaymentButton type="visa" />
          <PaymentButton type="mastercard" />
        </PaymentMethodStyledItemHeader>
        {paymentMethod === "card" && (
          <>
            <div>
              Card Number
              <PaymentMethodStyledCardInputWrapper>
                <CardNumberElement
                  options={{
                    style: {
                      base: PaymentMethodStyledInput,
                    },
                  }}
                />
              </PaymentMethodStyledCardInputWrapper>
            </div>

            <div>
              <div>
                Expiry Date
                <PaymentMethodStyledCardInputWrapper>
                  <CardExpiryElement
                    options={{
                      style: {
                        base: PaymentMethodStyledInput,
                      },
                    }}
                  />
                </PaymentMethodStyledCardInputWrapper>
              </div>
              <div>
                CVC
                <PaymentMethodStyledCardInputWrapper>
                  <CardCvcElement
                    options={{
                      style: {
                        base: PaymentMethodStyledInput,
                      },
                    }}
                  />
                </PaymentMethodStyledCardInputWrapper>
              </div>
            </div>
          </>
        )}
      </PaymentMethodStyledItem>

      {/* <CheckoutForm />     */}
      <PaymentMethodStyledItem>
        <PaymentMethodStyledItemHeader>
          <RadioButton
            name="payment"
            label="PayPal"
            value="paypal"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentMethod(e.target.value)
            }
          />
          <PaymentButton type="paypal" />
        </PaymentMethodStyledItemHeader>
        {paymentMethod === "paypal" && (
          <div style={{ marginTop: 10 }}>
            <PayPalButton onSuccess={addPaypalScript} amount={0.01} />
          </div>
        )}
      </PaymentMethodStyledItem>

      <PaymentMethodStyledItem>
        <RadioButton
          name="payment"
          label="Cash on delivery"
          value="cash"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPaymentMethod(e.target.value)
          }
        />
      </PaymentMethodStyledItem>
    </PaymentMethodStyled>
  );
};

export default PaymentMethod;
