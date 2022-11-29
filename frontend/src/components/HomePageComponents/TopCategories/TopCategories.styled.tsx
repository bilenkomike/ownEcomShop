import styled from "styled-components";
import Colors from "../../../constants/ui/colors/Colors";

export const TopCategoriesStyled = styled.div`
  display: block;
  position: relative;
  min-height: 390px;
`;

export const TopCategoriesStyledInner = styled.div`
  position: absolute;
  top: -60px;

  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 17.9%;
  box-sizing: border-box;
`;

export const TopCategoriesStyledItem = styled.div`
  margin-left: 15px;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
`;

export const TopCategoriesStyledImage = styled.img`
  display: block;
  max-width: 390px;
  width: 100%;
  border-radius: 4px;
`;

export const TopCategoriesStyledText = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: ${Colors.gray800};
`;
