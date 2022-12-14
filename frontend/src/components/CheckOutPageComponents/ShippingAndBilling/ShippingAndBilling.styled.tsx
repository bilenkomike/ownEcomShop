import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const ShippingAndBillingStyled = styled.section`
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${Colors.gray300};
`;

export const ShippingAndBillingStyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  colors: ${Colors.gray900};
`;

export const ShippingAndBillingStyledForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShippingAndBillingStyledFormGroup = styled.div`
  display: block;
  width: 48%;

  & > div {
    width: 100%;

    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    & > input {
      width: 100%;
    }
  }
`;
