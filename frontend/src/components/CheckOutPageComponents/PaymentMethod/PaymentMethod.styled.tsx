import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const PaymentMethodStyled = styled.section`
  padding-bottom: 32px;
  margin-bottom: 32px;

  border-bottom: 1px solid ${Colors.gray300};
`;

export const PaymentMethodStyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: ${Colors.gray900};
`;

export const PaymentMethodStyledItem = styled.div`
  display: block;
  padding: 24px;
  max-width: 390px;
  width: 100%;
  margin-bottom: 16px;

  border: 1px solid ${Colors.gray300};
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;

  & > div {
    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray800};
  }

  & > div:nth-child(2) {
    display: block;
    margin: 10px 0;
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: space-between;

    & > div {
      &:first-child {
        width: 180px;
      }
      &:last-child {
        width: 142px;
      }
    }
  }
`;

export const PaymentMethodStyledItemHeader = styled.div`
  display: flex;
  align-items: center;

  button {
    & {
      margin-left: 10px;
    }
    width: 48px;
    height: 26px;
    img {
      width: 90%;
    }
  }
`;

export const PaymentMethodStyledCardInputWrapper = styled.div`
  margin-top: 10px;

  border: 1px solid ${Colors.gray400};
  border-radius: 4px;
  width: 100%;
  padding: 13px 16px;
  box-sizing: border-box;
`;

export const PaymentMethodStyledInput = {
  iconColor: "#202020",
  color: Colors.gray800,
  fontWeight: "400",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "16px",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: Colors.gray800,
  },
  "::placeholder": {
    color: Colors.gray600,
  },
};
