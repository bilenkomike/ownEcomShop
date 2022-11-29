import React from "react";
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
} from "./Intro.styled";
import Button from "../../Button/Button";

const Intro: React.FC = () => {
  return (
    <IntroStyled>
      <IntorStyledItem>
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

      <IntroStyledSelect>
        <IntroStyledSelectItem active>01</IntroStyledSelectItem>
        <IntroStyledSelectItem>02</IntroStyledSelectItem>
        <IntroStyledSelectItem>03</IntroStyledSelectItem>
        <IntroStyledSelectItem>04</IntroStyledSelectItem>
      </IntroStyledSelect>
      {/* <Carousel type="right-left-item-select"> */}

      {/* </Carousel> */}
    </IntroStyled>
  );
};

export default Intro;
// 01
// 02
// 03
// 04
