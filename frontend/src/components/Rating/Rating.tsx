import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { RatingStyled, RatingStyledItem } from "./Rating.styled";

const Rating: React.FC<{ rating: number; absolute: boolean }> = ({
  rating,
  absolute = false,
}) => {
  let ratingContent = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingContent.push(
        <RatingStyledItem colored>
          <BsStarFill />
        </RatingStyledItem>
      );
    } else if (i - 1 < rating && rating < i) {
      ratingContent.push(
        <RatingStyledItem colored>
          <BsStarHalf />
        </RatingStyledItem>
      );
    } else {
      ratingContent.push(
        <RatingStyledItem>
          <BsStar />
        </RatingStyledItem>
      );
    }
  }

  return <RatingStyled absolute={absolute}>{ratingContent}</RatingStyled>;
};

export default Rating;
