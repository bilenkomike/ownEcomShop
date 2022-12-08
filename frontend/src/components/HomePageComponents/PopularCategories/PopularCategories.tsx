import React from "react";
import Title from "components/Title/Title";
import {
  PopularCategoriesStyled,
  PopularCategoriesStyledList,
  PopularCategoriesStyledListItem,
  PopularCategoriesStyledListItemImage,
  PopularCategoriesStyledListItemText,
} from "./PopularCategories.styled";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";
import img4 from "./images/image_4.png";
import img5 from "./images/image_5.png";
import img6 from "./images/image_6.png";

const PopularCategories = () => {
  return (
    <PopularCategoriesStyled>
      <Title>Popular categories</Title>

      <PopularCategoriesStyledList>
        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img1} alt="Tops" />
          <PopularCategoriesStyledListItemText>
            Tops
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>

        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img2} alt="T-shirts" />
          <PopularCategoriesStyledListItemText>
            T-shirts
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>

        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img3} alt="Caps" />
          <PopularCategoriesStyledListItemText>
            Caps
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>

        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img4} alt="Sandals" />
          <PopularCategoriesStyledListItemText>
            Sandals
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>

        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img5} alt="Jackets" />
          <PopularCategoriesStyledListItemText>
            Jackets
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>

        <PopularCategoriesStyledListItem>
          <PopularCategoriesStyledListItemImage src={img6} alt="Coats" />
          <PopularCategoriesStyledListItemText>
            Coats
          </PopularCategoriesStyledListItemText>
        </PopularCategoriesStyledListItem>
      </PopularCategoriesStyledList>
    </PopularCategoriesStyled>
  );
};

export default PopularCategories;
