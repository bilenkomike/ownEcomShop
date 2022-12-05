import styled, { css } from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationStyledItem = styled.div<{ active?: boolean }>`
  display: block;
  width: 10px;

  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray700};
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.active &&
    css`
      color: ${Colors.primary};
    `};
  cursor: pointer;

  &:hover {
    font-weight: 700;
    color: ${Colors.primary};
  }

  transition: all 0.1s linear;
`;
