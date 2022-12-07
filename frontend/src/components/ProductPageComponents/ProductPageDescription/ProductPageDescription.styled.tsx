import styled, { css } from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const ProductPageDescriptionStyled = styled.section`
  width: 49%;
  margin-bottom: 180px;
`;

export const ProductPageDescriptionStyledPrice = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ProductPageDescriptionStyledPriceText = styled.span<{
  sale?: boolean;
}>`
  font-weight: 700;
  font-size: 24px;

  color: ${Colors.gray900};
  ${(props) =>
    props.sale &&
    css`
      color: ${Colors.danger};
    `};
`;

export const ProductPageDescriptionStyledPriceSaleFrom = styled.span`
  margin-left: 12px;
  font-size: 18px;
  color: ${Colors.gray700};
  font-weight: 400;
  text-decoration: line-through;
`;

export const ProductPageDescriptionStyledSale = styled.span`
  padding: 6px 8px;
  margin-left: 32px;

  background-color: ${Colors.danger};
  border-radius: 4px;

  color: ${Colors.white};
  font-weight: 700;
  font-size: 14px;
`;

export const ProductPageDescriptionStyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & > span {
    display: flex;
  }
  & > div {
    color: ${Colors.gray700};
    font-weight: 400;
    font-size: 14px;
  }
`;

export const ProductPageDescriptionStyledAttributes = styled.div``;
export const ProductPageDescriptionStyledAttribute = styled.div`
  margin-top: 24px;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};

  & > span {
    display: flex;

    align-items: center;
    margin-top: 12px;

    color: ${Colors.gray700};

    & > div {
      margin-top: 0px;
    }
  }
  &:last-child > span {
    justify-content: space-between;
  }
`;

export const ProductPageDescriptionStyledSizeButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.gray800};
  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  &:hover {
    color: ${Colors.primary};
  }

  transition: all 0.1s ease;
`;
export const ProductPageDescriptionStyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0px 48px;
  & > div {
    width: 80px;
    & > input {
      width: 80px;
    }
  }
  & > button {
    width: 244px;

    &:last-child {
      width: 153px;
    }
  }
`;

export const ProductPageDescriptionStyledAccordion = styled.div`
  padding: 0 0 20px;
  border-bottom: 1px solid ${Colors.gray300};
  margin-bottom: 20px;
`;

export const ProductPageDescriptionStyledAccordionHeader = styled.div<{
  active: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  & > h5 {
    font-weight: 700;
    font-size: 16px;
    color: ${Colors.gray900};

    padding: 0;
    margin: 0;
  }

  & > button {
    width: 16px;
    height: 16px;
    color: ${Colors.primary};

    ${(props) =>
      props.active &&
      css`
        transform: rotate(180deg);
      `}
    transition: all 0.35s ease;
  }
`;

export const ProductPageDescriptionStyledAccordionContent = styled.div<{
  active: boolean;
  minh?: boolean;
}>`
  height: 0;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  ${(props) =>
    props.active && !props.minh
      ? css`
          height: 200px;

          visibility: visible;
          opacity: 1;
        `
      : props.active && props.minh
      ? css`
          visibility: visible;
          opacity: 1;
          height: 90px;
        `
      : null}

  transition: all .5s ease;
  & > p {
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray800};
  }
  & > table {
    width: 100%;
    border-collapse: collapse;
    & > thead {
      width: 100%;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 12px;
      color: ${Colors.gray700};
      & > tr > td {
        padding: 10px 0px;
      }
      & > span {
        display: block;
        width: 255%;
        height: 1px;

        background: linear-gradient(
          rgba(221, 218, 220, 0),
          rgba(218, 219, 221, 0.5),
          rgba(218, 219, 221, 1),
          rgba(218, 219, 221, 0.5),
          rgba(218, 219, 221, 0)
        );
      }
    }

    & > tbody {
      font-weight: 400;
      font-size: 14px;
      color: ${Colors.gray800};
      & > span {
        display: block;
        width: 255%;
        height: 1px;

        background: linear-gradient(
          rgba(221, 218, 220, 0),
          rgba(218, 219, 221, 0.5),
          rgba(218, 219, 221, 1),
          rgba(218, 219, 221, 0.5),
          rgba(218, 219, 221, 0)
        );
      }
      & > tr > td {
        padding: 10px 0px;
      }
    }
  }

  & > ul {
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.gray800};
    & > li {
      display: flex;
      align-items: center;

      margin: 4px 0px;

      &::before {
        content: "";
        display: flex;
        width: 4px;
        height: 4px;
        margin-right: 16px;

        background-color: ${Colors.primary};
        border-radius: 100%;
      }
    }
  }
`;

export const ProductPageDescriptionStyledShare = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray900};

  & > button {
    width: 20px;
    height: 20px;
    color: ${Colors.gray700};
    margin-left: 16px;
  }
`;

export const ProductPageDescriptionStyledpayButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;
