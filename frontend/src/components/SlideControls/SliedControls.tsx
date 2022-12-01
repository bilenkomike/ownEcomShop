import React from "react";
import {
  SlideControlsStyled,
  SlideControlsStyledItem,
} from "./SlideControls.styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SliedControls: React.FC<{
  actionBack?: () => void;
  actionForward?: () => void;
}> = ({ actionBack, actionForward }) => {
  return (
    <SlideControlsStyled>
      <SlideControlsStyledItem onClick={actionBack}>
        <AiOutlineArrowLeft />
      </SlideControlsStyledItem>
      <SlideControlsStyledItem onClick={actionForward}>
        <AiOutlineArrowRight />
      </SlideControlsStyledItem>
    </SlideControlsStyled>
  );
};

export default SliedControls;
