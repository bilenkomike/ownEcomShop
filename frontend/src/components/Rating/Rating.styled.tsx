import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const RatingStyled = styled.div<{ absolute: boolean }>`
  display: flex;

  ${(props) => {
    if (props.absolute) {
      return css`
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 3;
      `;
    }
  }}
`;

export const RatingStyledItem = styled.div<{ colored?: boolean }>`
  & > svg {
    color: ${Colors.gray500};
    ${(props) =>
      props.colored &&
      css`
        color: ${Colors.warning};
      `};
  }
`;
