import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

import { Link } from "react-router-dom";

export const NewArrivalsStyled = styled.section`
  text-align: center;
`;

export const NewArrivalsStyledList = styled.div`
  display: flex;
`;

export const NewArrivalsStyledListPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NewArrivalsStyledListPaginationItem = styled.div<{
  active?: boolean;
}>`
  display: block;
  width: 30px;
  margin-left: 12px;

  border: 1px solid
    ${(props) => (props.active ? Colors.gray800 : Colors.gray500)};

  transition: border 0.2s linear;
`;

export const NewArrivalsStyledDescription = styled.div`
  color: ${Colors.gray700};
  font-size: 18px;
  font-weight: 400;
`;

export const NewArrivalsStyledLink = styled(Link)`
  display: block;
  margin-bottom: 60px;

  color: ${Colors.primary};
  font-size: 18px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
