import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const ProductsListPageTopBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  & > button {
    width: 255px;
  }

  & > span {
    display: flex;
    align-items: center;
    margin: 0px 10px;
    font-weight: 700;
    font-size: 16px;
    color: ${Colors.gray800};

    & > span {
      font-weight: 400;
      font-size: 14px;
      color: ${Colors.gray700};
      margin-left: 10px;
    }
    & > div {
      width: 170px;
      & > input {
        width: 170px;
      }
      margin-left: 10px;
    }

    &:nth-last-child(2) > div {
      width: 80px;
      & > input {
        width: 80px;
      }
    }
  }
`;
