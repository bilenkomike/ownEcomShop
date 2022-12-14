import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const CheckoutPageHeaderStyled = styled.header`
  width: 100%;
  margin-bottom: 32px;
  padding-bottom: 32px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > a {
      display: block;
      font-weight: 700;
      font-size: 16px;
      color: ${Colors.primary};
      text-decoration: underline;
    }
  }

  border-bottom: 1px solid ${Colors.gray300};
`;
