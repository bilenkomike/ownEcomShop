import React from "react";
import Title from "../../Title/Title";
import {
  TrendingNowStyled,
  TrendingNowStyledHeader,
  TrendingNowStyledButton,
  TrendingNowStyledList,
} from "./TrendingNow.styled";
import Product from "../../Product/Product";
import SliedControls from "../../SlideControls/SliedControls";
import Button from "../../Button/Button";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";

const TrendingNow = () => {
  return (
    <TrendingNowStyled>
      <TrendingNowStyledHeader>
        <Title>Trending now</Title>
        <SliedControls />
      </TrendingNowStyledHeader>
      <TrendingNowStyledList>
        <Product
          size="large"
          id="some"
          name="Shirt with insertion lace trims"
          gallary={[img1]}
          price={49.95}
          currency="$"
        />
        <Product
          size="large"
          id="some"
          name="Chrono watch with blue leather belt"
          gallary={[img2]}
          price={49.95}
          currency="$"
        />
        <Product
          size="large"
          id="some"
          name="Check coat with colour contrast"
          gallary={[img3]}
          price={49.95}
          currency="$"
        />
      </TrendingNowStyledList>

      <TrendingNowStyledButton>
        <Button variant="outlined" size="large" styleType="default">
          Explore top sales
        </Button>
      </TrendingNowStyledButton>
    </TrendingNowStyled>
  );
};

export default TrendingNow;
