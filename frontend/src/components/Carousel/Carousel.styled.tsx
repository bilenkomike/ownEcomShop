import styled, { css } from "styled-components";

export const SCarouselWrapper = styled.div`
  display: flex;
`;

interface ICarouselProps {
  currentSlide: number;
  active?: boolean;
  widthType: "%" | "vw";
}

export const SCarouselSlide = styled.div<ICarouselProps>`
  flex: 0 0 auto;

  transition: all 0.5s ease;
  width: ${(props) => `100${props.widthType}`};

  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

export const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
`;
