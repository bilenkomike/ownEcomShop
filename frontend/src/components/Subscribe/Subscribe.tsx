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
} from "./Subscribe.styled";
import img from "./images/image.png";
import CheckBox from "../CheckBox/CheckBox";
import Title from "../Title/Title";

const Subscribe: React.FC = () => {
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

        <CheckBox
          text={"I agree to receive communications from Createx Store."}
        />
      </SubscribeStyledContent>
      <SubscribeStyledImg src={img} />
    </SubscribeStyled>
  );
};

export default Subscribe;
