import React from "react";
import Button from "UI/Button/Button";
import Title from "UI/Title/Title";
import {
  InstagramStyled,
  InstagramStyledSubTitle,
  InstagramStyledDescription,
  InstagramStyledList,
  InstalgramStyledListItem,
} from "./Instagram.styled";
import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";

const Instagram = () => {
  return (
    <InstagramStyled>
      <InstagramStyledDescription>
        <InstagramStyledSubTitle>
          Follow us on Instagram
        </InstagramStyledSubTitle>
        <Title>@createx_store</Title>
        <Button
          variant="outlined"
          styleType="default"
          size="large"
          icon="instagram"
          iconPosition="before"
        >
          Follow instagram
        </Button>
      </InstagramStyledDescription>
      <InstagramStyledList>
        <InstalgramStyledListItem src={img1} />
        <InstalgramStyledListItem src={img2} />
        <InstalgramStyledListItem src={img3} />
      </InstagramStyledList>
    </InstagramStyled>
  );
};

export default Instagram;
