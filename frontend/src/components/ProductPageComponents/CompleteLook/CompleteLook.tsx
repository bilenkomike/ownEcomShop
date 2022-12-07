import React, { useState } from "react";
import Carousel from "../../Carousel/Carousel";
import Product from "../../Product/Product";
import SliedControls from "../../SlideControls/SliedControls";
import Title from "../../Title/Title";
import {
  CompleteLookStyled,
  CompleteLookStyledItem,
  CompleteLookStyledContainer,
  CompleteLookStyledHeader,
  CompleteLookStyledMainImage,
  CompleteLookStyledList,
  CompleteLookStyledListPagination,
  CompleteLookStyledListPaginationItem,
} from "./CompleteLook.styled";

import main from "./images/image_main.png";
import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";

const CompleteLook = () => {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);
  const array = ["", ""];

  const actionBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const actionForward = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };
  return (
    <CompleteLookStyled>
      <CompleteLookStyledHeader>
        <Title>Complete your look</Title>
        <SliedControls actionBack={actionBack} actionForward={actionForward} />
      </CompleteLookStyledHeader>
      <CompleteLookStyledContainer>
        <Carousel currentSlide={index} widthType="%">
          <CompleteLookStyledItem>
            <CompleteLookStyledMainImage src={main} />
            <div>
              <Carousel currentSlide={0}>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
              </Carousel>
              <CompleteLookStyledListPagination>
                {array.map((item, index) => (
                  <CompleteLookStyledListPaginationItem
                    active={index === page}
                    onClick={() => setPage(index)}
                  ></CompleteLookStyledListPaginationItem>
                ))}
              </CompleteLookStyledListPagination>
            </div>
          </CompleteLookStyledItem>
          <CompleteLookStyledItem>
            <CompleteLookStyledMainImage src={main} />
            <div>
              <Carousel currentSlide={0}>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
                <CompleteLookStyledList>
                  <Product
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
                </CompleteLookStyledList>
              </Carousel>
              <CompleteLookStyledListPagination>
                {array.map((item, index) => (
                  <CompleteLookStyledListPaginationItem
                    active={index === page}
                    onClick={() => setPage(index)}
                  ></CompleteLookStyledListPaginationItem>
                ))}
              </CompleteLookStyledListPagination>
            </div>
          </CompleteLookStyledItem>
        </Carousel>
      </CompleteLookStyledContainer>
    </CompleteLookStyled>
  );
};

export default CompleteLook;
