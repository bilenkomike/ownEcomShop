import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const CheckOutPageItemReviewsStyled = styled.section`
  display: block;
  margin-bottom: 32px;
  padding-bottom: 32px;

  border-bottom: 1px solid ${Colors.gray300};
`;

export const CheckOutPageItemReviewsStyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  colors: ${Colors.gray900};
`;

export const CheckOutPageItemReviewsStyledContent = styled.div`
  border-radius: 4px;
  background-color: ${Colors.gray200};
`;
export const CheckOutPageItemReviewsStyledList = styled.ul``;
export const CheckOutPageItemReviewsStyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 24px;

  border-bottom: 1px solid ${Colors.gray300};

  & > img {
    diplay: block;
    width: 80px;
    height: 80px;
  }

  & > div:nth-child(3) {
    width: 77px;
    & > input {
      width: 77px;
    }
  }
`;

export const CheckOutPageItemReviewsStyledListItemMainText = styled.div`
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.gray900};

  & > span {
    display: block;

    margin-top: 4px;

    font-weight: 400;
    font-size: 12px;
    color: ${Colors.gray700};

    & > span {
      color: ${Colors.gray800};
    }
  }
`;

export const CheckOutPageItemReviewsStyledListItemPrice = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray900};
`;

export const CheckOutPageItemReviewsStyledListItemActions = styled.div`
  display: block;
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    font-weight: 700;
    font-size: 12px;
    color: ${Colors.gray800};
    & > svg {
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
`;

export const CheckOutPageItemReviewsStyledTotal = styled.div`
  display: block;
  width: 100%;

  box-sizing: border-box;

  padding: 20px 24px 24px 24px;

  text-align: right;
  font-weight: 700;
  font-size: 18px;
  color: ${Colors.gray900};
`;
