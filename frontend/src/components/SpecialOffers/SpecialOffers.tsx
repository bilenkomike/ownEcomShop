import React, { useState } from "react";
import {
  SpecialOfferItem,
  SpecialOffersStyled,
  SpecialOffersList,
  SplecialOffersAction,
  SpecialOfferItemWrapper,
} from "./SpecialOffers.styled";

import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Carousel from "components/Carousel/Carousel";

const SpecialOffers: React.FC = () => {
  const [offerId, setOfferId] = useState(0);
  const offers = [
    {
      text: "Up to 70% Off. ",
      link: "/",
      linkText: "Shop our latest sale styles",
    },
    {
      text: "Up to 70% Off. 1",
      link: "/",
      linkText: "Shop our latest sale styles",
    },
    {
      text: "Up to 70% Off. 2",
      link: "/",
      linkText: "Shop our latest sale styles",
    },
    {
      text: "Up to 70% Off. 3",
      link: "/",
      linkText: "Shop our latest sale styles",
    },
  ];

  return (
    <SpecialOffersStyled>
      <SplecialOffersAction
        onClick={() => offerId > 0 && setOfferId(offerId - 1)}
      >
        <TfiAngleLeft />
      </SplecialOffersAction>

      <SpecialOffersList>
        <Carousel currentSlide={offerId} widthType="%">
          {offers.map((offer, id) => (
            <SpecialOfferItemWrapper
              active={offerId === id}
              key={`${id}_offer`}
            >
              <SpecialOfferItem active={offerId === id}>
                {offer.text}
                <Link to={offer.link}>{offer.linkText}</Link>
              </SpecialOfferItem>
            </SpecialOfferItemWrapper>
          ))}
        </Carousel>
      </SpecialOffersList>

      <SplecialOffersAction
        onClick={() => offerId < offers.length - 1 && setOfferId(offerId + 1)}
      >
        <TfiAngleRight />
      </SplecialOffersAction>
    </SpecialOffersStyled>
  );
};

export default SpecialOffers;
