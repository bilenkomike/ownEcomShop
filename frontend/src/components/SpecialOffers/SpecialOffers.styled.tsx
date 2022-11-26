import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const SpecialOffersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${Colors.primary};

  color: ${Colors.white};
  font-size: 12px;
  font-weight: 900;
`;

export const SpecialOffersList = styled.div`
  padding: 12px 8px;
`;

export const SpecialOfferItem = styled.span<{ active?: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  color: ${Colors.white};
  & > a {
    color: ${Colors.white};
    font-weight: 400;
    margin-left: 5px;
  }
`;

export const SplecialOffersAction = styled.span`
  cursor: pointer;
`;
