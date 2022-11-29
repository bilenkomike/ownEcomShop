import React from "react";
import {
  TopCategoriesStyled,
  TopCategoriesStyledInner,
  TopCategoriesStyledText,
  TopCategoriesStyledImage,
  TopCategoriesStyledItem,
} from "./TopCategories.styled";

import img1 from "./images/image.png";
import img2 from "./images/image2.png";
import img3 from "./images/image3.png";

const TopCategories: React.FC = () => {
  return (
    <TopCategoriesStyled>
      <TopCategoriesStyledInner>
        <TopCategoriesStyledItem>
          <TopCategoriesStyledImage src={img1} />
          <TopCategoriesStyledText>Women’s</TopCategoriesStyledText>
        </TopCategoriesStyledItem>

        <TopCategoriesStyledItem>
          <TopCategoriesStyledImage src={img2} />
          <TopCategoriesStyledText>Men’s</TopCategoriesStyledText>
        </TopCategoriesStyledItem>

        <TopCategoriesStyledItem>
          <TopCategoriesStyledImage src={img3} />
          <TopCategoriesStyledText>Kids’</TopCategoriesStyledText>
        </TopCategoriesStyledItem>
      </TopCategoriesStyledInner>
    </TopCategoriesStyled>
  );
};

export default TopCategories;
