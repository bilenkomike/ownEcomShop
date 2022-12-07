import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const ProductStyledGalary = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;

  position: relative;
`;

export const ProductStyledImage = styled.img<{
  active: boolean;
  current: number;
  index: number;
}>`
  display: block;
  width: 100%;
  border-radius: 4px;
  visibility: hidden;

  ${(props) => {
    return css`
      transform: translateX(-${props.current * 100}%);
    `;
  }};

  ${(props) => {
    return (
      props.active &&
      css`
        visibility: visible;
        transform: translateX(-${props.current * 100}%);
      `
    );
  }};
  transition: all 0.2s ease;
`;

export const ProductStyledGallaryButton = styled.button<{
  left: boolean;
}>`
  position: absolute;
  top: 50%;
  z-index: 2;

  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: none;

  ${(props) => {
    if (props.left) {
      return css`
        left: 16px;
      `;
    }
    return css`
      right: 16px;
    `;
  }};
`;

export const ProductStyledHover = styled.div`
  transform: translateY(-50px);
  visibility: hidden;
  opacity: 0;

  transition: all 0.2s linear, opacity 0.4s linear;
`;

export const ProductStyled = styled.div<{ size: "small" | "large" }>`
  position: relative;

  width: 100%;
  max-width: ${(props) => {
    return props.size === "small" ? 285 : 390;
  }}px;
  margin: 0px 20px;

  max-height: ${(props) => {
    return props.size === "small" ? 513 : 646;
  }}px;
  height: 100%;

  &:hover {
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16),
      0px 30px 24px -10px rgba(154, 156, 165, 0.1),
      0px 12px 10px -6px rgba(154, 156, 165, 0.08),
      0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  }

  &:hover ${ProductStyledGallaryButton} {
    display: block;
  }
  &:hover ${ProductStyledHover} {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  transition: all 0.2s linear;
`;

export const ProductStyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.gray800};
  text-decoration: none;
  &:active,
  &:visited {
    color: ${Colors.gray800};
  }
`;

export const ProductStyledPrice = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ProductStyledPriceText = styled.span<{ sale?: boolean }>`
  font-weight: 700;
  font-size: 24px;

  color: ${Colors.gray900};
  ${(props) =>
    props.sale &&
    css`
      color: ${Colors.danger};
    `}
`;

export const ProductStyledPriceSaleFrom = styled.span`
  font-size: 18px;
  color: ${Colors.gray700};
  font-weight: 400;
  text-decoration: line-through;
`;

export const ProductStyledSale = styled.span`
  position: absolute;
  top: 16px;
  left: 24px;
  z-index: 4;

  padding: 6px 8px;

  background-color: ${Colors.danger};
  border-radius: 4px;

  color: ${Colors.white};
  font-weight: 700;
  font-size: 14px;
`;

export const ProductStyledDescription = styled.div`
  height: auto;
  padding: 8px;
`;

export const ProductStyledWishList = styled.div<{ wished?: boolean }>`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;

  background: ${Colors.white};

  border-radius: 50%;

  cursor: pointer;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${(props) => {
      return props.wished ? Colors.primary : Colors.gray700;
    }};

    transition: all 0.2s linear;
  }

  &:hover {
    & > svg {
      transform: scale(0.8);
      color: ${Colors.primary};
    }
  }

  &:active {
    & > svg {
      transform: scale(0.7);
    }
  }
`;
