import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";
import HexToRGBA from "../../constants/ui/colors/colorsHelpers/HexToRGBA";

export const BackDropStyled = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};

  position: fixed;
  z-index: 3;

  background-color: ${HexToRGBA(Colors.gray900, 0.75)};
  width: 100%;
  height: 100%;
`;
