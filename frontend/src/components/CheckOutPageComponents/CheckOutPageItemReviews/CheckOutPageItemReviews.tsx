import React from "react";
import img from "./images/image.png";
import {
  CheckOutPageItemReviewsStyled,
  CheckOutPageItemReviewsStyledContent,
  CheckOutPageItemReviewsStyledHeader,
  CheckOutPageItemReviewsStyledList,
  CheckOutPageItemReviewsStyledListItem,
  CheckOutPageItemReviewsStyledListItemActions,
  CheckOutPageItemReviewsStyledListItemMainText,
  CheckOutPageItemReviewsStyledListItemPrice,
  CheckOutPageItemReviewsStyledTotal,
} from "./CheckOutPageItemReviews.styled";
import Input from "components/Input/Input";
import Button from "UI/Button/Button";
import { AiOutlineHeart } from "react-icons/ai";

const CheckOutPageItemReviews = () => {
  return (
    <CheckOutPageItemReviewsStyled>
      <CheckOutPageItemReviewsStyledHeader>
        1. Item Review
      </CheckOutPageItemReviewsStyledHeader>

      <CheckOutPageItemReviewsStyledContent>
        <CheckOutPageItemReviewsStyledList>
          <CheckOutPageItemReviewsStyledListItem>
            <img src={img} alt="" />
            <CheckOutPageItemReviewsStyledListItemMainText>
              Basic hooded sweatshirt in pink
              <span>
                Color:<span>pink</span>
              </span>
              <span>
                Size:<span>S</span>
              </span>
            </CheckOutPageItemReviewsStyledListItemMainText>
            <Input
              name="input-type-size"
              type="number"
              max={10}
              min={1}
              step={1}
              value={1}
              onChange={(e) => console.log(e)}
              variant="small"
            />
            <CheckOutPageItemReviewsStyledListItemPrice>
              $18.90
            </CheckOutPageItemReviewsStyledListItemPrice>
            <CheckOutPageItemReviewsStyledListItemActions>
              <Button styleType="default" size="small" variant="outlined">
                Delete
              </Button>
              <span>
                Move to
                <AiOutlineHeart />
              </span>
            </CheckOutPageItemReviewsStyledListItemActions>
          </CheckOutPageItemReviewsStyledListItem>
          <CheckOutPageItemReviewsStyledListItem>
            <img src={img} alt="" />
            <CheckOutPageItemReviewsStyledListItemMainText>
              Basic hooded sweatshirt in pink
              <span>
                Color:<span>pink</span>
              </span>
              <span>
                Size:<span>S</span>
              </span>
            </CheckOutPageItemReviewsStyledListItemMainText>
            <Input
              name="input-type-size"
              type="number"
              max={10}
              min={1}
              step={1}
              value={1}
              onChange={(e) => console.log(e)}
              variant="small"
            />
            <CheckOutPageItemReviewsStyledListItemPrice>
              $18.90
            </CheckOutPageItemReviewsStyledListItemPrice>
            <CheckOutPageItemReviewsStyledListItemActions>
              <Button styleType="default" size="small" variant="outlined">
                Delete
              </Button>
              <span>
                Move to
                <AiOutlineHeart />
              </span>
            </CheckOutPageItemReviewsStyledListItemActions>
          </CheckOutPageItemReviewsStyledListItem>
          <CheckOutPageItemReviewsStyledListItem>
            <img src={img} alt="" />
            <CheckOutPageItemReviewsStyledListItemMainText>
              Basic hooded sweatshirt in pink
              <span>
                Color:<span>pink</span>
              </span>
              <span>
                Size:<span>S</span>
              </span>
            </CheckOutPageItemReviewsStyledListItemMainText>
            <Input
              name="input-type-size"
              type="number"
              max={10}
              min={1}
              step={1}
              value={1}
              onChange={(e) => console.log(e)}
              variant="small"
            />
            <CheckOutPageItemReviewsStyledListItemPrice>
              $18.90
            </CheckOutPageItemReviewsStyledListItemPrice>
            <CheckOutPageItemReviewsStyledListItemActions>
              <Button styleType="default" size="small" variant="outlined">
                Delete
              </Button>
              <span>
                Move to
                <AiOutlineHeart />
              </span>
            </CheckOutPageItemReviewsStyledListItemActions>
          </CheckOutPageItemReviewsStyledListItem>
          <CheckOutPageItemReviewsStyledListItem>
            <img src={img} alt="" />
            <CheckOutPageItemReviewsStyledListItemMainText>
              Basic hooded sweatshirt in pink
              <span>
                Color:<span>pink</span>
              </span>
              <span>
                Size:<span>S</span>
              </span>
            </CheckOutPageItemReviewsStyledListItemMainText>
            <Input
              name="input-type-size"
              type="number"
              max={10}
              min={1}
              step={1}
              value={1}
              onChange={(e) => console.log(e)}
              variant="small"
            />
            <CheckOutPageItemReviewsStyledListItemPrice>
              $18.90
            </CheckOutPageItemReviewsStyledListItemPrice>
            <CheckOutPageItemReviewsStyledListItemActions>
              <Button styleType="default" size="small" variant="outlined">
                Delete
              </Button>
              <span>
                Move to
                <AiOutlineHeart />
              </span>
            </CheckOutPageItemReviewsStyledListItemActions>
          </CheckOutPageItemReviewsStyledListItem>
        </CheckOutPageItemReviewsStyledList>

        <CheckOutPageItemReviewsStyledTotal>
          Subtotal: $198.65
        </CheckOutPageItemReviewsStyledTotal>
      </CheckOutPageItemReviewsStyledContent>
    </CheckOutPageItemReviewsStyled>
  );
};

export default CheckOutPageItemReviews;
