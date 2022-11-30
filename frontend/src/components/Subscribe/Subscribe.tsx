import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import {
  SubscribeStyled,
  SubscribeStyledImg,
  SubscribeStyledContent,
  SubscribeStyledContentSubTitle,
  SubscribeStyledContentSelectType,
  SubscribeStyledContentSelectTypeItem,
  SubscribeStyledSubscribeForm,
  SubscribeStyledCheckboxField,
  SubscribeStyledCheckbox,
} from "./Subscribe.styled";
import img from "./images/image.png";
import checkImg from "./images/check.png";
import Title from "../Title/Title";

const Subscribe: React.FC = () => {
  const [check, setCheck] = useState(false);

  const cheked = () => {
    setCheck(!check);
  };

  return (
    <SubscribeStyled>
      <SubscribeStyledContent>
        <Title>Subscribe for updates</Title>
        <SubscribeStyledContentSubTitle>
          Subscribe for exclusive early sale access and new arrivals.
        </SubscribeStyledContentSubTitle>
        <SubscribeStyledContentSelectType>
          <SubscribeStyledContentSelectTypeItem>
            Women
          </SubscribeStyledContentSelectTypeItem>
          <SubscribeStyledContentSelectTypeItem>
            Men
          </SubscribeStyledContentSelectTypeItem>
          <SubscribeStyledContentSelectTypeItem active>
            Girls
          </SubscribeStyledContentSelectTypeItem>
          <SubscribeStyledContentSelectTypeItem>
            Boys
          </SubscribeStyledContentSelectTypeItem>
        </SubscribeStyledContentSelectType>
        <SubscribeStyledSubscribeForm>
          <Input
            label="Email"
            variant="default"
            type="email"
            placeholder="Your working email"
            onChange={(e) => console.log(e)}
          />
          <Button size="default" styleType="default" variant="solid">
            Subscribe
          </Button>
        </SubscribeStyledSubscribeForm>
        <SubscribeStyledCheckboxField onClick={cheked}>
          <SubscribeStyledCheckbox active={check}>
            <span>
              <img src={checkImg} alt="" />
            </span>
          </SubscribeStyledCheckbox>
          I agree to receive communications from Createx Store.
        </SubscribeStyledCheckboxField>
      </SubscribeStyledContent>
      <SubscribeStyledImg src={img} />
    </SubscribeStyled>
  );
};

export default Subscribe;
