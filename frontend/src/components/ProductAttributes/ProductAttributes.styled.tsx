import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";
import HexToRGBA from "../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const AttributesStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0px;
`;

export const AttributesStyledList = styled.div`
  display: flex;
`;
export const AttributesStyledListItem = styled.div<{
  active: boolean;
  type: "color" | "text";
  bgColor?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 4px;
  box-sizing: border-box;
  outline: 2px solid transparent;
  border-radius: 4px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => {
    return props.type === "color"
      ? css`
          border-radius: 50%;
          & > span {
            display: flex;
            width: 16px;
            height: 16px;
            background-color: ${props.bgColor};
            border-radius: 50%;
          }
        `
      : css`
          text-transform: uppercase;
          font-size: 12px;
        `;
  }}

  border: 1px solid ${HexToRGBA(Colors.gray600, 0.6)};

  transition: border 0.1s linear;
  &:hover {
    border-color: ${Colors.primary};
  }

  ${(props) => {
    return (
      props.active &&
      css`
        border-color: ${Colors.primary};
      `
    );
  }}
`;
