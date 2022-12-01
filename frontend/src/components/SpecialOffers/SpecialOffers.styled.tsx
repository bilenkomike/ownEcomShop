import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const SpecialOffersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 0px 35%;

  box-sizing: border-box;

  background-color: ${Colors.primary};

  color: ${Colors.white};
  font-size: 12px;
  font-weight: 900;
`;

export const SpecialOffersList = styled.div`
  display: flex;
  width: 220px;
  margin-left: 10px;
  overflow-x: hidden;

  padding: 12px 8px;

  justify-content: center;
`;
export const SpecialOfferItemWrapper = styled.div<{ active?: boolean }>`
  display: block;
  width: 100%;
`;

export const SpecialOfferItem = styled.span<{ active?: boolean }>`
  display: flex;
  width: 100%;

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
