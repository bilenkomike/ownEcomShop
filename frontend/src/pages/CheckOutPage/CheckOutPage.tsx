import CheckOutPageHeader from "components/CheckOutPageComponents/CheckOutPageHeader/CheckOutPageHeader";
import CheckOutPageItemReviews from "components/CheckOutPageComponents/CheckOutPageItemReviews/CheckOutPageItemReviews";
import PaymentMethod from "components/CheckOutPageComponents/PaymentMethod/PaymentMethod";
import Shipping from "components/CheckOutPageComponents/Shipping/Shipping";
import ShippingAndBilling from "components/CheckOutPageComponents/ShippingAndBilling/ShippingAndBilling";
import Container from "components/Container/Container";
import React from "react";

const CheckOutPage = () => {
  return (
    <Container>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "block", width: "65%" }}>
          <CheckOutPageHeader />
          <CheckOutPageItemReviews />
          <ShippingAndBilling />
          <Shipping />
          <PaymentMethod />
        </div>
      </form>
    </Container>
  );
};

export default CheckOutPage;
