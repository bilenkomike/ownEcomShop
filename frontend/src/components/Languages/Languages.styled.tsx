import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const LanguagesStyled = styled.div<{ active: boolean }>`
  position: absolute;
  top: 100%;
  right: 28.5%;
  z-index: 5;

  display: block;

  background-color: ${Colors.gray900};

  color: ${Colors.white};

  visibility: hidden;
  opacity: 0;

  transform: translateY(-200px);

  ${(props) =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    `}

  transition: all .4s ease-in-out;
`;

export const LanguagesStyledItem = styled.div`
  display: block;
  width: 100%;
  padding: 10px 20px;

  box-sizing: border-box;

  font-size: 16px;
  font-weight: 700;

  text-align: left;

  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${Colors.gray800};
  }
`;
