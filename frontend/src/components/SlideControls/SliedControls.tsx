import React from "react";
import {
  SlideControlsStyled,
  SlideControlsStyledItem,
} from "./SlideControls.styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SliedControls = () => {
  return (
    <SlideControlsStyled>
      <SlideControlsStyledItem>
        <AiOutlineArrowLeft />
      </SlideControlsStyledItem>
      <SlideControlsStyledItem>
        <AiOutlineArrowRight />
      </SlideControlsStyledItem>
    </SlideControlsStyled>
  );
};

export default SliedControls;
