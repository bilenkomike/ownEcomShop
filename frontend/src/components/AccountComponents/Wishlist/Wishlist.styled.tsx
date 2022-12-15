import styled from "styled-components";
import Colors from "constants/ui/colors/Colors";

export const WishlistStyled = styled.section`
  display: block;
`;

export const WishlistStyledHeaderItem = styled.span`
  color: ${Colors.danger};

  cursor: pointer;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }

  transition: all 0.2s ease;

  & > svg {
    margin-right: 10px;
  }
`;

export const WishlistStyledList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;

  & > div {
    width: 44%;
    margin-bottom: 30px;
  }
`;
