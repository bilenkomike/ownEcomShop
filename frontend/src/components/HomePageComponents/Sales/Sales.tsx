import React, { useState } from "react";
import Title from "../../Title/Title";
import Product from "../../Product/Product";
import SliedControls from "../../SlideControls/SliedControls";
import Button from "../../Button/Button";

import {
  SalesStyled,
  SalesStyledButton,
  SalesStyledHeader,
  SalesStyledList,
  SalesStyledContainer,
} from "./Sales.styled";
import Carousel from "../../Carousel/Carousel";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";

const Sales = () => {
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
    <SalesStyled>
      <SalesStyledHeader>
        <Title>Sale up to 70%</Title>
        <SliedControls actionBack={actionBack} actionForward={actionForward} />
      </SalesStyledHeader>
      <SalesStyledContainer>
        <Carousel widthType="%" currentSlide={page}>
          <SalesStyledList>
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
          </SalesStyledList>
          <SalesStyledList>
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
          </SalesStyledList>
          <SalesStyledList>
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
          </SalesStyledList>
        </Carousel>
      </SalesStyledContainer>

      <SalesStyledButton>
        <Button variant="outlined" size="large" styleType="default">
          See all sale products
        </Button>
      </SalesStyledButton>
    </SalesStyled>
  );
};

export default Sales;
