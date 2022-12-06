import styled, { css } from "styled-components";

import Colors from "../../constants/ui/colors/Colors";

export const InputStyledCOntainer = styled.div`
  position: relative;
`;

export const InputStyled = styled.input<{
  variant: "large" | "default" | "small";
  inputType: string;
}>`
  display: block;
  width: 390px;
  padding: ${(props) =>
    props.variant === "default"
      ? "11px 0px 12px 16px"
      : props.variant === "large"
      ? "13px 0px 13px 16px"
      : "9px 0px 9px 12px"};

  border-radius: 4px;
  border: 1px solid ${Colors.gray400};
  box-sizing: border-box;

  font-size: ${(props) =>
    props.variant === "default" ? 14 : props.variant === "large" ? 16 : 12}px;
  color: ${Colors.gray900};

  transition: border 0.1s linear, box-shadow 0.1s linear;

  &:focus {
    border: 1px solid ${Colors.primary};
    outline: none;
    box-shadow: (
      0px 80px 80px -20px rgba(23, 105, 106, 0.08),
      0px 30px 24px -10px rgba(23, 105, 106, 0.05),
      0px 12px 10px -6px rgba(23, 105, 106, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03)
    );
  }

  &:placeholder {
    color: ${Colors.gray600};
  }

  ${(props) => {
    switch (props.inputType) {
      case "select":
        return css`
          cursor: pointer;
        `;
      default:
        return css`
          cursor: text;
        `;
    }
  }}
`;

export const InputStyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};
`;

export const InputStyledIcon = styled.button<{ active?: boolean }>`
  position: absolute;
  bottom: 30%;
  right: 5%;
  z-index: 2;

  width: 16px;
  height: 16px;

  border: none;
  border-radius: 0;
  background-color: transparent;

  color: ${Colors.gray800};
  cursor: pointer;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
    `}

  transition: all .3s ease;
`;

export const InputStyledSelectOption = styled.div`
  display: block;
  padding: 11px 0px 12px 16px;

  border-top: 1px solid ${Colors.gray500};
  background-color: ${Colors.white};

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray700};
  &:first-child {
    border: none;
  }

  cursor: pointer;

  &:hover {
    background-color: ${Colors.gray300};
  }

  transition: all 0.3s ease;
`;

export const InputStyledSelectOptions = styled.div<{
  active?: boolean;
  length: number;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 4;

  display: block;
  width: 100%;
  height: 0;
  visibility: hidden;
  opacity: 0;

  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  border: 0px solid ${Colors.gray500};
  ${(props) =>
    props.active &&
    css`
      height: ${props.length * 40}px;
      border-width: 1px;
      visibility: visible;
      opacity: 1;
    `};

  transition: all 0.3s ease;
`;
