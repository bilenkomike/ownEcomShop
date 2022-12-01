import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const TrendingNowStyled = styled.section`
  display: block;
  padding: 80px 17.9%;
  background-color: ${Colors.gray300};
  margin-bottom: 100px;
  /* width: 100vw; */

  overflow-x: hidden;
`;

export const TrendingNowStyledContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: hidden;
`;

export const TrendingNowStyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrendingNowStyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const TrendingNowStyledList = styled.div`
  display: flex;
`;
