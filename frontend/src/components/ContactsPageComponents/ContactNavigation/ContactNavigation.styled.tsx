import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Colors from "constants/ui/colors/Colors";

export const ContactNavigationStyled = styled.nav`
  display: block;
`;

export const ContactStyledLink = styled(Link)<{ active: boolean }>`
  display: block;
  color: ${Colors.gray600};
  font-weight: 700;
  font-size: 28px;
  padding: 10px 0;

  &:hover {
    color: ${Colors.primary};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${Colors.primary};
    `}
  transition: all .1s linear;
`;
