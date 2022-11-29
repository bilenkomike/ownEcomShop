import styled from "styled-components";
import ButtonStylesTypes from "./types/Button.styled.types";
import {
  active,
  hover,
  borderColor,
  backGroundColor,
  color,
  disabledHover,
  size,
  fontSize,
} from "./effects/Button.styled.effects";

export const ButtonStyled = styled.button<ButtonStylesTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.size === "social" && { width: 32, height: 32 }}
  padding: ${(props) => size(props.size)};
  max-height: 52px;

  height: ${(props) =>
    props.size === "default" ? 42 : props.size === "large" ? 52 : 36}px;

  font-weight: 700;
  font-size: ${(props) => fontSize(props.size)};
  color: ${(props) => color(props.variant, props.styleType, props.size)};
  text-align: center;

  background-color: ${(props) =>
    backGroundColor(props.variant, props.styleType, props.size)};

  border: ${(props) => {
    return borderColor(props.variant, props.styleType, props.size);
  }};
  border-radius: 4px;
  box-sizing: border-box;

  opacity: 1;

  cursor: pointer;

  transition: background-color 0.2s linear, color 0.2s linear,
    opacity 0.2s linear, border 0.2s linear;

  &:hover {
    ${(props) => hover(props.variant, props.styleType, props.size)}
  }

  &:active {
    ${(props) => active(props.variant, props.styleType, props.size)}
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:disabled:hover {
    ${(props) => disabledHover(props.variant, props.styleType, props.size)}
  }
`;
