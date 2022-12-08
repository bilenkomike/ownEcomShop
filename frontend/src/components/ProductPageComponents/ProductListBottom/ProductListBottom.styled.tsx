import styled from "styled-components";

import Colors from "../../../constants/ui/colors/Colors";
export const ProductsListStyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 120px;
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray800};

  & > span {
    display: flex;
    align-items: center;
    & > span {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      color: ${Colors.gray700};
      margin-left: 10px;
      & > div {
      }
      & > div {
        width: 170px;
        & > input {
          width: 170px;
        }
        margin-left: 10px;
      }

      &:last-child > div {
        width: 80px;
        & > input {
          width: 80px;
        }
      }
    }
  }
`;
