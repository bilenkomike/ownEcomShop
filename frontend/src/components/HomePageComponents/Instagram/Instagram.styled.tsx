import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const InstagramStyled = styled.section`
  display: flex;
  padding: 0px 17.9% 180px;
  justify-content: space-between;
`;

export const InstagramStyledSubTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.gray900};
`;

export const InstagramStyledDescription = styled.div`
  display: block;

  & > h2 {
    margin: 8px 0 60px;
  }
`;

export const InstagramStyledList = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;

export const InstalgramStyledListItem = styled.img`
  max-width: 230px;
  margin-right: 10px;
  width: 100%;

  &:last-child {
    margin-right: 0;
  }
`;
