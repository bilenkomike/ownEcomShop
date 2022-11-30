import React from "react";
import {
  ServicesStyled,
  ServicesStyledItem,
  ServicesStyledItemImg,
  ServicesStyledItemSubtitle,
  ServicesStyledItemTitle,
  ServicesStyledDivider,
} from "./Services.styled";

import img1 from "./images/ic-delivery.png";
import img2 from "./images/ic-call-center.png";
import img3 from "./images/ic-shield.png";
import img4 from "./images/ic-credit-card.png";

const Services: React.FC = () => {
  return (
    <ServicesStyled>
      <ServicesStyledItem>
        <ServicesStyledItemImg src={img1} />
        <ServicesStyledItemTitle>
          Fast Worldwide Shipping
        </ServicesStyledItemTitle>
        <ServicesStyledItemSubtitle>
          Get free shipping over $250
        </ServicesStyledItemSubtitle>
      </ServicesStyledItem>
      <ServicesStyledDivider />
      <ServicesStyledItem>
        <ServicesStyledItemImg src={img2} />
        <ServicesStyledItemTitle>24/7 Customer Support</ServicesStyledItemTitle>
        <ServicesStyledItemSubtitle>
          Friendly 24/7 customer support
        </ServicesStyledItemSubtitle>
      </ServicesStyledItem>
      <ServicesStyledDivider />
      <ServicesStyledItem>
        <ServicesStyledItemImg src={img3} />
        <ServicesStyledItemTitle>Money Back Guarantee</ServicesStyledItemTitle>
        <ServicesStyledItemSubtitle>
          We return money within 30 days
        </ServicesStyledItemSubtitle>
      </ServicesStyledItem>
      <ServicesStyledDivider />
      <ServicesStyledItem>
        <ServicesStyledItemImg src={img4} />
        <ServicesStyledItemTitle>Secure Online Payment</ServicesStyledItemTitle>
        <ServicesStyledItemSubtitle>
          Accept all major credit cards
        </ServicesStyledItemSubtitle>
      </ServicesStyledItem>
    </ServicesStyled>
  );
};

export default Services;
