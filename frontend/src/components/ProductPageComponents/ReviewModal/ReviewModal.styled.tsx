import Colors from "constants/ui/colors/Colors";
import HexToRGBA from "constants/ui/colors/colorsHelpers/HexToRGBA";
import styled from "styled-components";

export const ReviewModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: ${HexToRGBA(Colors.gray900, 0.75)};
`;

export const ReviewModalStyledContent = styled.form`
  position: relative;

  display: block;
  padding: 48px;

  background-color: ${Colors.white};

  border: 1px solid ${Colors.gray300};
  /* shadow/large */

  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 4px;

  & > #close-login {
    margin-top: 0;
    width: auto;
  }

  & > div,
  & > textarea {
    margin-bottom: 10px;
  }
`;

export const ReviewModalStyledTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: ${Colors.gray900};
`;

export const ReviewModalStyledCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  display: block;
  & > svg {
    width: 24px;
    height: 24px;
  }
  color: ${Colors.gray700};

  &:hover {
    transform: rotate(180deg);
  }

  transition: all 0.2s linear;
`;
