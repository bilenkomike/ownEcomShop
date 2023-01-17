import React, { useState } from "react";
import Title from "components/Title/Title";
import {
  InterestingStyled,
  InterestingStyledHeader,
  InterestingStyledList,
  InterestingStyledContainer,
} from "./Interesting.styled";
import Product from "components/Product/Product";
import SliedControls from "components/SlideControls/SliedControls";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";
import Carousel from "components/Carousel/Carousel";

const Interesting = () => {
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
    <InterestingStyled>
      <InterestingStyledHeader>
        <Title>You may be interested in</Title>
        <SliedControls actionBack={actionBack} actionForward={actionForward} />
      </InterestingStyledHeader>

      <InterestingStyledContainer>
        <Carousel widthType="%" currentSlide={page}>
          <InterestingStyledList>
            {/* <Product
              size="small"
              id="some"
              name="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            /> */}
          </InterestingStyledList>
          <InterestingStyledList>
            {/* <Product
              size="small"
              id="some"
              name="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            /> */}
          </InterestingStyledList>
          <InterestingStyledList>
            {/* <Product
              size="small"
              id="some"
              name="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            />
            <Product
              size="small"
              id="some"
              name="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
            /> */}
          </InterestingStyledList>
        </Carousel>
      </InterestingStyledContainer>
    </InterestingStyled>
  );
};

export default Interesting;
