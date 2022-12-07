import styled, { css } from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";
import HexToRGBA from "../../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const ProductPageGallaryStyled = styled.section`
  width: 49%;

  & > span {
    width: 100%;
    max-height: 600px;
    height: auto;

    position: relative;
  }
`;

export const ProductPageGallaryStyledMainImage = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  border-radius: 4px;
`;

export const ProductPageGallaryList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  & > div {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(20% - 20px);
    max-height: 87px;
    height: auto;
    margin-top: 20px;

    border-radius: 4px;
    border: 1px solid transparent;

    background-color: ${HexToRGBA(Colors.gray900, 0.6)};

    color: ${Colors.white};

    cursor: pointer;

    & > svg {
      width: 32px;
      height: 32px;
    }

    & > img {
      position: absolute;
      top: -21px;
      left: -1px;
      z-index: -1;

      width: 100%;
      height: 100%;
    }
  }
`;
export const ProductPageGallaryListItem = styled.img<{
  active: boolean;
  video: boolean;
}>`
  display: block;
  width: calc(20% - 20px);
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:last-child {
    margin-right: 0px;
  }

  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${Colors.primary};
    `}

  cursor: pointer;
`;

export const ProductPageGallaryStyledButton = styled.button<{ left: boolean }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  ${(props) =>
    props.left
      ? css`
          left: 32px;
        `
      : css`
          right: 32px;
        `};

  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${Colors.white};

  opacity: 0.75;

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  transition: all 0.2s linear;
`;
