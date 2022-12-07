import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const ProductPageHeaderStyled = styled.header`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    font-weight: 700;
    font-size: 16px;
    color: ${Colors.gray700};
    & > span > span {
      font-weight: 400;
    }
  }

  border-bottom: 1px solid ${Colors.gray300};

  margin-bottom: 32px;
`;
