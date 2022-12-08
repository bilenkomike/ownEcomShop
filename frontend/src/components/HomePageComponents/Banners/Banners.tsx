import React from "react";
import {
  BannersStyled,
  BannersStyledItem,
  BannersStyledItemImage,
  BannersStyledItemContent,
  BannersStyledItemTitle,
  BannersStyledItemSubtitle,
  BannersStyledExpirationDate,
  BannersStyledExpirationDateTime,
  BannersStyledExpirationDateTimeItem,
  BannersStyledSubscribeForm,
} from "./Banners.styled";

import Button from "components/Button/Button";

import img1 from "./images/image.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";
import img4 from "./images/image_4.png";
import Input from "components/Input/Input";

const Banners: React.FC = () => {
  return (
    <BannersStyled>
      <BannersStyledItem size={1.25}>
        <BannersStyledItemImage src={img1} width={1} alt="" />
        <BannersStyledItemContent>
          <BannersStyledItemSubtitle>
            Summer Collections
          </BannersStyledItemSubtitle>
          <BannersStyledItemTitle>Sale Up to 70%</BannersStyledItemTitle>
          <Button size="default" styleType="default" variant="outlined">
            Explore new prices
          </Button>
        </BannersStyledItemContent>
      </BannersStyledItem>
      <BannersStyledItem size={1.75}>
        <BannersStyledItemImage src={img2} width={2} alt="" />

        <BannersStyledItemContent>
          <BannersStyledItemSubtitle>
            Deal of the week
          </BannersStyledItemSubtitle>
          <BannersStyledItemTitle>
            Stay Warm With Our New Sweaters
          </BannersStyledItemTitle>
          <Button size="default" styleType="default" variant="outlined">
            Shop now
          </Button>
          <BannersStyledExpirationDate>
            <BannersStyledItemSubtitle>
              Limited time offer
            </BannersStyledItemSubtitle>
            <BannersStyledExpirationDateTime>
              <BannersStyledExpirationDateTimeItem>
                <div>06</div> Days
              </BannersStyledExpirationDateTimeItem>
              <BannersStyledExpirationDateTimeItem>
                <div>18</div> Hours
              </BannersStyledExpirationDateTimeItem>
              <BannersStyledExpirationDateTimeItem>
                <div>24</div> Mins
              </BannersStyledExpirationDateTimeItem>
              <BannersStyledExpirationDateTimeItem>
                <div> 12</div> Sec
              </BannersStyledExpirationDateTimeItem>
            </BannersStyledExpirationDateTime>
          </BannersStyledExpirationDate>
        </BannersStyledItemContent>
      </BannersStyledItem>
      <BannersStyledItem size={1.75}>
        <BannersStyledItemImage src={img3} width={2} alt="" />
        <BannersStyledItemContent>
          <BannersStyledItemSubtitle>New collection</BannersStyledItemSubtitle>
          <BannersStyledItemTitle>
            Shoes & Bags <br />
            autumn / winter 2020
          </BannersStyledItemTitle>
          <Button
            size="default"
            styleType="default"
            variant="outlined"
            icon="next"
            iconPosition="after"
          >
            See offers
          </Button>
        </BannersStyledItemContent>
      </BannersStyledItem>
      <BannersStyledItem size={1.25}>
        <BannersStyledItemImage src={img4} width={1} alt="" />
        <BannersStyledItemContent>
          <BannersStyledItemSubtitle>
            For All new Email Subscribers
          </BannersStyledItemSubtitle>
          <BannersStyledItemTitle>
            Get 5% Off & Free Delivery
          </BannersStyledItemTitle>
          <BannersStyledSubscribeForm>
            <Input
              name="banners-email"
              label="Email"
              variant="default"
              type="email"
              placeholder="Your working email"
              onChange={(e) => console.log(e)}
            />
            <Button size="default" styleType="default" variant="solid">
              Subscribe
            </Button>
          </BannersStyledSubscribeForm>
          <BannersStyledItemSubtitle sub>
            *Sign up to be the first to hear about exclusive deals, special
            offers and upcoming collections.
          </BannersStyledItemSubtitle>
        </BannersStyledItemContent>
      </BannersStyledItem>
    </BannersStyled>
  );
};

export default Banners;
