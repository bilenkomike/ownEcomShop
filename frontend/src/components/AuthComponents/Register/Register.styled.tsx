import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";
import HexToRGBA from "../../../constants/ui/colors/colorsHelpers/HexToRGBA";

import { Link } from "react-router-dom";

export const RegisterStyled = styled.section`
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;

  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  background-color: ${HexToRGBA(Colors.gray900, 0.75)};
`;

export const RegisterStyledForm = styled.form`
  display: block;
  padding: 48px;

  border-radius: 4px;
  border: 1px solid ${Colors.gray300};
  background-color: ${Colors.white};
  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 4px 4px -4px rgba(30, 33, 44, 0.05);

  & > div > input {
    width: 100%;
  }
  & > div {
    margin-top: 20px;
  }

  & > button {
    margin-top: 20px;
    width: 100%;
  }

  & > #close-register {
    margin-top: 0;
    width: auto;
  }
  position: relative;
`;

export const RegisterStyledCloseButton = styled.button`
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

export const RegisterStyledTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: ${Colors.gray900};
`;

export const RegisterStyledSubTitle = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray700};
`;

export const RegisterStyledLink = styled(Link)`
  color: ${Colors.primary};
`;

export const RegisterStyledAddition = styled.div`
  text-align: center;
  border-top: 1px solid ${HexToRGBA(Colors.gray300, 1)};
  padding-top: 20px;
  color: ${Colors.gray700};
`;

export const RegisterStyledSocials = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  & > button {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
