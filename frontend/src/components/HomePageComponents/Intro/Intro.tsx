import React, { useState } from "react";
import img from "./images/image.png";
import {
  IntroStyled,
  IntorStyledItem,
  IntroStyledItemSection,
  IntroStyledItemImage,
  IntroStyledItemSubtitle,
  IntroStyledItemTitle,
  IntroStyledItemButtonList,
  IntroStyledSelect,
  IntroStyledSelectItem,
  IntroStyledButton,
} from "./Intro.styled";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Button from "../../Button/Button";
import Carousel from "../../Carousel/Carousel";

const Intro: React.FC = () => {
  const [index, setIndex] = useState(0);
  const array = ["", "", "", ""];
  return (
    <IntroStyled>
      <IntroStyledButton
        left
        onClick={() => index > 0 && setIndex(index - 1)}
        disabled={index === 0}
      >
        <BsArrowLeft />
      </IntroStyledButton>
      <Carousel currentSlide={index}>
        {array.map((item, id) => (
          <IntorStyledItem
            id="id"
            key={`intro_${index + Math.random().toString()}`}
          >
            <IntroStyledItemImage src={img} alt="intro" />
            <IntroStyledItemSection>
              <IntroStyledItemSubtitle>New Collection</IntroStyledItemSubtitle>
              <IntroStyledItemTitle>Menswear 2020</IntroStyledItemTitle>
              <IntroStyledItemButtonList>
                <Button variant="outlined" styleType="default" size="large">
                  Shop Sale
                </Button>
                <Button variant="solid" styleType="default" size="large">
                  Shop the menswear
                </Button>
              </IntroStyledItemButtonList>
            </IntroStyledItemSection>
          </IntorStyledItem>
        ))}
      </Carousel>
      <IntroStyledButton
        left={false}
        disabled={index === array.length - 1}
        onClick={() => index < array.length - 1 && setIndex(index + 1)}
      >
        <BsArrowRight />
      </IntroStyledButton>
      <IntroStyledSelect>
        <IntroStyledSelectItem
          active={index + 1 === 1}
          onClick={() => setIndex(0)}
        >
          01
        </IntroStyledSelectItem>
        <IntroStyledSelectItem
          active={index + 1 === 2}
          onClick={() => setIndex(1)}
        >
          02
        </IntroStyledSelectItem>
        <IntroStyledSelectItem
          active={index + 1 === 3}
          onClick={() => setIndex(2)}
        >
          03
        </IntroStyledSelectItem>
        <IntroStyledSelectItem
          active={index + 1 === 4}
          onClick={() => setIndex(3)}
        >
          04
        </IntroStyledSelectItem>
      </IntroStyledSelect>
    </IntroStyled>
  );
};

export default Intro;
// 01
// 02
// 03
// 04
