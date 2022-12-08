import React from "react";
import {
  ProductReviewsStyledStatistic,
  ProductReviewsStyled,
  ProductReviewsStyledCommentBlock,
  ProductReviewsStyledStatisticsGeneral,
  ProductReviewsStyledStatisticsBars,
  ProductReviewsStyledCommentsActions,
} from "./ProductReviews.styled";

import Product from "components/Product/Product";
import img from "./images/image.png";
import Comment from "components/Comment/Comment";
import Pagination from "components/Pagination/Pagination";
import Rating from "components/Rating/Rating";

import { AiOutlineStar } from "react-icons/ai";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const ProductReviews: React.FC<{
  review: boolean;
  onOpenReview: () => void;
}> = ({ review, onOpenReview }) => {
  return (
    <ProductReviewsStyled>
      <ProductReviewsStyledCommentBlock>
        <ProductReviewsStyledStatistic>
          <ProductReviewsStyledStatisticsGeneral>
            <h2>12 reviews</h2>
            <Rating rating={4} absolute={false} />
            <p> 9 out of 12 (75%)</p>
            <p> Customers recommended this product</p>
          </ProductReviewsStyledStatisticsGeneral>
          <ProductReviewsStyledStatisticsBars percents={[10, 2, 1, 1, 1]}>
            <div>
              5<AiOutlineStar />
              <span>
                <span></span>
              </span>
              10
            </div>
            <div>
              4<AiOutlineStar />
              <span>
                <span></span>
              </span>
              2
            </div>
            <div>
              3<AiOutlineStar />
              <span>
                <span></span>
              </span>
              1
            </div>
            <div>
              2<AiOutlineStar />
              <span>
                <span></span>
              </span>
              1
            </div>
            <div>
              1<AiOutlineStar />
              <span>
                <span></span>
              </span>
              1
            </div>
          </ProductReviewsStyledStatisticsBars>
        </ProductReviewsStyledStatistic>
        <ProductReviewsStyledCommentsActions>
          <Button
            type="button"
            styleType="default"
            size="default"
            variant="solid"
            onClick={onOpenReview}
          >
            Leave a review
          </Button>
          <span>
            Sort by{" "}
            <Input
              icon="select"
              type="select"
              name="sort-commnets"
              variant="default"
              options={[
                { label: "newest", value: "newest" },
                { label: "newest", value: "newest" },
                { label: "newest", value: "newest" },
              ]}
              onChange={(e) => console.log(e)}
              placeholder="Select Sort"
            />
          </span>
        </ProductReviewsStyledCommentsActions>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>

        <Pagination />
      </ProductReviewsStyledCommentBlock>
      <Product
        key={1}
        size="large"
        id="black-and-white-sport-cap"
        name="Black and white sport cap"
        price={18.5}
        currency="$"
        gallary={[img, img, img]}
        rating={4}
        wishlist={false}
        attributes={[
          {
            id: "size",
            type: "text",
            items: [
              { name: "S", value: "S" },
              { name: "M", value: "M" },
              { name: "L", value: "L" },
              { name: "XL", value: "XL" },
            ],
            selectedValue: "XL",
          },
          {
            id: "color",
            type: "color",
            items: [
              { name: "#C0DDED", value: "#C0DDED" },
              { name: "#874E19", value: "#874E19" },
              { name: "#000000", value: "#000000" },
            ],
            selectedValue: "#000000",
          },
        ]}
      />
    </ProductReviewsStyled>
  );
};

export default ProductReviews;
