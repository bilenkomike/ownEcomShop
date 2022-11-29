import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const PopularCategoriesStyled = styled.section`
  text-align: center;
  margin: 0px 0px 180px;
`;

export const PopularCategoriesStyledList = styled.div`
  display: flex;
  padding: 0 17.9%;
  justify-content: space-between;
  gap: 30px;
  margin-top: 60px;
`;

export const PopularCategoriesStyledListItem = styled.div`
  display: block;
`;

export const PopularCategoriesStyledListItemImage = styled.img`
  display: block;
  max-width: 180px;
  width: 100%;
  max-height: 180px;

  border-radius: 100%;
`;

export const PopularCategoriesStyledListItemText = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.gray900};
`;
