import Comment from "components/Comment/Comment";
import Input from "components/Input/Input";
import React from "react";
import AccountHeader from "../AccountHeader/AccountHeader";
import {
  ReviewsStyled,
  ReviewsStyledHeaderItem,
  ReviewsStyledList,
  ReviewsStyledSeeMore,
} from "./Reviews.styled";
import { ReactComponent as Convert } from "./images/convert.svg";

const Reviews = () => {
  return (
    <ReviewsStyled>
      <AccountHeader title="My Reviews">
        <ReviewsStyledHeaderItem>
          Sort by
          <Input
            type="select"
            variant="default"
            onChange={(e) => console.log(e)}
            name="sort"
            icon="select"
            placeholder="Sort"
          />
        </ReviewsStyledHeaderItem>
      </AccountHeader>
      <ReviewsStyledList>
        <div>
          <span>
            For: <span>Chrono watch with blue leather belt</span>
          </span>
          <Comment />
        </div>
        <div>
          <span>
            For: <span>Chrono watch with blue leather belt</span>
          </span>
          <Comment />
        </div>
        <div>
          <span>
            For: <span>Chrono watch with blue leather belt</span>
          </span>
          <Comment />
        </div>
        <div>
          <span>
            For: <span>Chrono watch with blue leather belt</span>
          </span>
          <Comment />
        </div>
        <div>
          <span>
            For: <span>Chrono watch with blue leather belt</span>
          </span>
          <Comment />
        </div>
      </ReviewsStyledList>
      <ReviewsStyledSeeMore>
        <Convert />
        Load more
      </ReviewsStyledSeeMore>
    </ReviewsStyled>
  );
};

export default Reviews;
