import Colors from "constants/ui/colors/Colors";
import styled, { css } from "styled-components";

export const ReviewsStyled = styled.section``;

export const ReviewsStyledHeaderItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray800};

  & > div {
    margin-left: 10px;
    width: 170px;

    & > input {
      width: 170px;
    }
  }
`;

export const ReviewsStyledList = styled.div`
  display: block;
  margin-top: 20px;
  & > div {
    margin-bottom: 28px;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray700};
    & > span {
      display: block;
      margin-bottom: 20px;

      & > span {
        font-weight: 700;
        font-size: 16px;
        color: ${Colors.primary};
      }
    }
  }
`;

export const ReviewsStyledSeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray800};

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
