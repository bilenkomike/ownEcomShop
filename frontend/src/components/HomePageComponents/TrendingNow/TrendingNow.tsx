import React, { useState } from "react";
import Title from "../../Title/Title";
import {
  TrendingNowStyled,
  TrendingNowStyledHeader,
  TrendingNowStyledButton,
  TrendingNowStyledList,
  TrendingNowStyledContainer,
} from "./TrendingNow.styled";
import Product from "../../Product/Product";
import SliedControls from "../../SlideControls/SliedControls";
import Button from "../../Button/Button";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";
import Carousel from "../../Carousel/Carousel";

const TrendingNow = () => {
  const [page, setPage] = useState(0);

  const actionBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const actionForward = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  return (
    <TrendingNowStyled>
      <TrendingNowStyledHeader>
        <Title>Trending now</Title>
        <SliedControls actionBack={actionBack} actionForward={actionForward} />
      </TrendingNowStyledHeader>

      <TrendingNowStyledContainer>
        <Carousel widthType="%" currentSlide={page}>
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
        </Carousel>
      </TrendingNowStyledContainer>
      <TrendingNowStyledButton>
        <Button variant="outlined" size="large" styleType="default">
          Explore top sales
        </Button>
      </TrendingNowStyledButton>
    </TrendingNowStyled>
  );
};

export default TrendingNow;
