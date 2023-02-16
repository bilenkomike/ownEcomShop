import React, { useState } from "react";
import Title from "UI/Title/Title";
import Product from "components/Product/Product";
import SliedControls from "components/SlideControls/SliedControls";

import {
  RecentlyViewedStyled,
  RecentlyViewedStyledHeader,
  RecentlyViewedStyledList,
  RecentlyViewedStyledContainer,
} from "./RecentlyViewed.styled";
import Carousel from "components/Carousel/Carousel";

import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";

const RecentlyViewed = () => {
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
    <RecentlyViewedStyled>
      <RecentlyViewedStyledHeader>
        <Title>Recently Viewed</Title>
        <SliedControls actionBack={actionBack} actionForward={actionForward} />
      </RecentlyViewedStyledHeader>
      <RecentlyViewedStyledContainer>
        <Carousel widthType="%" currentSlide={page}>
          <RecentlyViewedStyledList>
            <Product
              size="small"
              id="some"
              title="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
          </RecentlyViewedStyledList>
          <RecentlyViewedStyledList>
            <Product
              size="small"
              id="some"
              title="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
          </RecentlyViewedStyledList>
          <RecentlyViewedStyledList>
            <Product
              size="small"
              id="some"
              title="Shirt with insertion lace trims"
              gallary={[img1]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Chrono watch with blue leather belt"
              gallary={[img2]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
            <Product
              size="small"
              id="some"
              title="Check coat with colour contrast"
              gallary={[img3]}
              price={49.95}
              currency="$"
              prices={[
                {
                  amount: 100,
                  currency: {
                    symbol: "$",
                    currency: "USD",
                  },
                  id: 100,
                },
              ]}
            />
          </RecentlyViewedStyledList>
        </Carousel>
      </RecentlyViewedStyledContainer>
    </RecentlyViewedStyled>
  );
};

export default RecentlyViewed;
