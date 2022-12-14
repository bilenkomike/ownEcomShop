import Colors from "constants/ui/colors/Colors";
import HexToRGBA from "constants/ui/colors/colorsHelpers/HexToRGBA";
import styled, { css } from "styled-components";

import { AlertVariant } from "./Alert";

export const AlertStyled = styled.div<{ variant: AlertVariant }>`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  align-items: center;

  box-sizing: border-box;
  border-radius: 4px;

  ${(props) => {
    switch (props.variant) {
      case "success":
        return css`
          background-color: ${HexToRGBA(Colors.primary, 0.06)};
          border: 1px solid ${HexToRGBA(Colors.primary, 0.25)};
          color: ${Colors.primary};
        `;
    }
  }}
`;
