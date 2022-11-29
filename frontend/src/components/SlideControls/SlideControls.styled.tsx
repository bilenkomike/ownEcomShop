import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const SlideControlsStyled = styled.div`
  display: flex;
  max-width: 100px;
  justify-content: space-between;
`;

export const SlideControlsStyledItem = styled.span`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  color: ${Colors.gray800};

  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }

  transition: all 0.1s linear;
`;
