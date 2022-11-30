import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const CTAMobileAppStyled = styled.section`
  position: relative;

  display: block;
  padding: 60px 17.9% 60px 50%;

  background-color: ${Colors.gray900};
`;

export const CTAMobileAppStyledTitle = styled.h2`
  display: block;
  margin: 0px 0px 48px;
  color: ${Colors.white};
  font-size: 32px;
  font-weight: 900;
`;

export const CTAMobileAppStyledImage = styled.img`
  position: absolute;
  left: 17.9%;
  bottom: 0;

  display: block;
  max-width: 490px;
  max-height: 330px;

  width: 100%;
`;
