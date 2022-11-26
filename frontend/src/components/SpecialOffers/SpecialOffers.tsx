import React from "react";
import {
  SpecialOfferItem,
  SpecialOffersStyled,
  SpecialOffersList,
  SplecialOffersAction,
} from "./SpecialOffers.styled";

import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";

const SpecialOffers: React.FC = () => {
  return (
    <SpecialOffersStyled>
      <SplecialOffersAction>
        <TfiAngleLeft />
      </SplecialOffersAction>

      <SpecialOffersList>
        <SpecialOfferItem active>
          Up to 70% Off. <Link to="/">Shop our latest sale styles</Link>
        </SpecialOfferItem>

        <SpecialOfferItem>
          Up to 70% Off. <Link to="/">Shop our latest sale styles</Link>
        </SpecialOfferItem>

        <SpecialOfferItem>
          Up to 70% Off. <Link to="/">Shop our latest sale styles</Link>
        </SpecialOfferItem>
      </SpecialOffersList>

      <SplecialOffersAction>
        <TfiAngleRight />
      </SplecialOffersAction>
    </SpecialOffersStyled>
  );
};

export default SpecialOffers;
