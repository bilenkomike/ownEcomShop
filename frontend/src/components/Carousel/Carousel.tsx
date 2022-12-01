import React from "react";

import { SCarouselSlide, SCarouselWrapper } from "./Carousel.styled";
// Infinite loop

const Carousel: React.FC<{
  children: React.ReactNode[];
  currentSlide: number;
  widthType?: "%" | "vw";
}> = ({ children, currentSlide, widthType = "vw" }) => {
  return (
    <>
      <SCarouselWrapper>
        {children.map((slide: any, index: number) => (
          <SCarouselSlide
            widthType={widthType}
            active={currentSlide === index}
            currentSlide={currentSlide}
            key={index}
          >
            {slide}
          </SCarouselSlide>
        ))}
      </SCarouselWrapper>
    </>
  );
};

export default Carousel;
