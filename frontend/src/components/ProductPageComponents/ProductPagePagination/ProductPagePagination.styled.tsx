import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const ProductPagePaginationStyled = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 40%;
`;

export const ProductPagePadinationStyledItem = styled(NavLink)`
  position: relative;

  display: block;
  padding: 10px 20px;
  margin-right: 12px;

  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray600};

  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &.active {
    color: ${Colors.primary};
    border: 1px solid ${Colors.primary};
  }

  & > sup {
    position: absolute;
    top: 6px;
    right: 4px;
    font-weight: 900;
    font-size: 10px;
  }

  &:hover {
    color: ${Colors.primary};
    border: 1px solid ${Colors.primary};
  }
`;
