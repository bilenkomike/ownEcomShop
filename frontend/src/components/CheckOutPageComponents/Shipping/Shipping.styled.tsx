import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const ShippingStyled = styled.section`
  padding-bottom: 32px;
  margin-bottom: 32px;

  border-bottom: 1px solid ${Colors.gray300};
`;

export const ShippingStyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  colors: ${Colors.gray900};
`;

export const ShippingStyledList = styled.ul`
  display: block;
  width: 100%;
`;

export const ShippingStyledListItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};

  & > span > span {
    display: block;
    margin-left: 25px;
    margin-top: 8px;

    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray700};
  }
`;
