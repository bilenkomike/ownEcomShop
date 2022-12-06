import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";
import HexToRGBA from "../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const ProductsFilterStyled = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 100%;
`;

export const ProductsFilterStyledItem = styled.div`
  width: 255px;
  margin-right: 40px;
`;
export const ProductsFilterStyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;
export const ProductsFilterStyledTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray900};
`;

export const ProductsFilterStyledIcon = styled.button<{ active?: boolean }>`
  width: 16px;
  height: 16px;
  color: ${Colors.primary};

  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
      margin-top: -3px;
    `};

  transition: all 0.4s ease;
`;

export const ProductsFilterStyledListInner = styled.div<{
  active: boolean;
  typePrice?: boolean;
}>`
  display: block;

  height: 0;
  overflow: hidden;
  ${(props) =>
    props.active
      ? !props.typePrice
        ? css`
            height: 240px;
          `
        : css`
            height: 150px;
          `
      : null}

  & > div {
    width: 100%;
    & > input {
      width: 100%;
    }
  }

  transition: all 0.4s ease;
`;

export const ProductsFilterStyledListItem = styled.li<{
  price?: boolean;
  priceRange?: boolean;
  left?: number;
  width?: number;
}>`
  padding: 4px 0px;
  position: relative;

  ${(props) =>
    props.price &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div {
        width: 40%;
        & > input {
          width: 100%;
        }
      }
    `}

  ${(props) =>
    props.priceRange &&
    css`
      & > div {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 10px;

        /* position: relative;s */
        & > div {
          width: 100%;
          height: 3px;

          border-radius: 20px;
          background-color: ${Colors.gray400};

          position: relative;
          & > i {
            position: absolute;
            top: -30px;
            left: calc(${props.left}% - 10px);
            &:last-child {
              left: unset;
              right: calc(
                ${100 - Number(props.width) - Number(props.left)}% - 10px
              );
            }

            display: flex;
            width: 48px;
            height: 22px;
            padding: 2px 10px;
            box-sizing: border-box;

            border-radius: 4px;

            background-color: ${Colors.gray800};

            justify-content: center;
            color: ${Colors.white};
          }
          & > div {
            position: absolute;
            top: 0;
            left: ${props.left}%;

            display: block;
            height: 100%;
            width: ${props.width}%;

            border-radius: 20px;

            background-color: ${Colors.primary};
          }
        }
        & > span {
          position: absolute;
          top: 0;
          left: 0;
          width: 102%;
        }
      }
    `}
`;

export const ProductsFilterStyledList = styled.ul<{
  typeColor?: boolean;
  typePrice?: boolean;
}>`
  height: 166px;
  margin-top: 16px;

  overflow: scroll;
  overflow-x: hidden;

  ${(props) =>
    props.typeColor &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      text-align: center;

      ${ProductsFilterStyledListItem} {
        & > span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          margin: 30px auto;

          & > span {
            display: block;

            width: 24px;
            height: 24px;
            background-color: #000;
            border-radius: 50%;
          }

          border-radius: 50%;

          border: 1px solid ${Colors.gray400};

          transition: all 0.2s ease-in-out;
        }

        &:hover > span {
          border-color: ${Colors.primary};
        }
        cursor: pointer;

        & > p {
          font-weight: 400;
          font-size: 12px;
          color: ${Colors.gray700};
        }
      }
    `}

  ${(props) =>
    props.typePrice &&
    css`
      position: relative;
      height: 160px;
      overflow: hidden;
    `}

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track-piece {
    background: ${Colors.gray300};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Colors.gray600};
    border-radius: 20px;
  }
`;

export const ProructsFilterStyledRangeInput = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  position: absolute;
  height: 60px;
  left: 10px;
  width: calc(100% - 20px);

  margin: 0;

  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;

    background: transparent;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 12px;
    width: 12px;

    background: ${Colors.primary};
    border-radius: 100%;
    border: 0;
    z-index: 2;
    top: 100%;
    transform: tsranslateY(0%);
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 20px;
    width: 20px;
    background: ${Colors.primary};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: 0;
    border: 0;
    color: transparent;
    background: transparent;
  }

  &::-ms-thumb {
    appearance: none;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;

    top: 0;
    margin: 0;
    box-shadow: none;
  }

  & {
    &::-webkit-slider-thumb:hover {
      box-shadow: 0px 0px 3px 3px ${HexToRGBA(Colors.primary, 0.35)};
    }
    &::-moz-range-thumb:hover {
      box-shadow: 0px 0px 3px 3px ${HexToRGBA(Colors.primary, 0.35)};
    }
    &::-ms-thumb:hover {
      box-shadow: 0px 0px 3px 3px ${HexToRGBA(Colors.primary, 0.35)};
    }
  }
`;
