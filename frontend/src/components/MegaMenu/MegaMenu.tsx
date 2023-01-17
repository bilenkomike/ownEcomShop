import React, { useEffect } from "react";
import Colors from "constants/ui/colors/Colors";
import BoyImg from "./images/image.png";

import {
  MegaMenuStyled,
  MegaMenuList,
  MegaMenuListItem,
  MegaMenuLine,
  MegaMenuListTitle,
  MegaMenuBanner,
  MegaMenuBannerText,
} from "./MegaMenu.styled";
import Button from "components/Button/Button";
import axios from "axios";
import API_URL from "config";

const MegaMenu: React.FC<{ active: boolean; type?: string }> = ({
  active,
  type = "Women",
}) => {
  useEffect(() => {
    axios.get(API_URL.concat(""));
  }, [type]);
  return (
    <MegaMenuStyled active={active}>
      <MegaMenuList>
        <MegaMenuListItem>New collection</MegaMenuListItem>
        <MegaMenuListItem>Best Sellers</MegaMenuListItem>
        <MegaMenuListItem>Plus Size</MegaMenuListItem>
        <MegaMenuListItem style={{ color: Colors.danger }}>
          Sale up to 70%
        </MegaMenuListItem>
      </MegaMenuList>
      <MegaMenuList>
        <MegaMenuListTitle>CLOTHES</MegaMenuListTitle>
        <MegaMenuListItem>Coats</MegaMenuListItem>
        <MegaMenuListItem>Jackets</MegaMenuListItem>
        <MegaMenuListItem>Suits</MegaMenuListItem>
        <MegaMenuListItem>Dresses </MegaMenuListItem>
        <MegaMenuListItem>Cardigans & sweaters</MegaMenuListItem>
        <MegaMenuListItem>Sweatshirts & hoodies</MegaMenuListItem>
        <MegaMenuListItem>T-shirts & tops</MegaMenuListItem>
        <MegaMenuListItem>Pants</MegaMenuListItem>
        <MegaMenuListItem>Jeans</MegaMenuListItem>
        <MegaMenuListItem>Shorts</MegaMenuListItem>
        <MegaMenuListItem>Skirts</MegaMenuListItem>
        <MegaMenuListItem>Lingerie & nightwear</MegaMenuListItem>
        <MegaMenuListItem>Sportswear</MegaMenuListItem>
        <MegaMenuListItem>Swimwear</MegaMenuListItem>
      </MegaMenuList>
      <MegaMenuList>
        <MegaMenuListTitle>SHOES</MegaMenuListTitle>
        <MegaMenuListItem>Boots</MegaMenuListItem>
        <MegaMenuListItem>Flat shoes</MegaMenuListItem>
        <MegaMenuListItem>Heels</MegaMenuListItem>
        <MegaMenuListItem>Sandals</MegaMenuListItem>
        <MegaMenuListItem>Mules</MegaMenuListItem>
        <MegaMenuListItem>Sliders</MegaMenuListItem>
        <MegaMenuListItem>Slippers</MegaMenuListItem>
        <MegaMenuListItem>Sneakers</MegaMenuListItem>
        <MegaMenuListItem>Leather</MegaMenuListItem>
      </MegaMenuList>
      <MegaMenuList>
        <MegaMenuListTitle>ACCESSORIES</MegaMenuListTitle>
        <MegaMenuListItem>Bags & bagpacks</MegaMenuListItem>
        <MegaMenuListItem>Hats & scarves</MegaMenuListItem>
        <MegaMenuListItem>Hair accessories</MegaMenuListItem>
        <MegaMenuListItem>Belts</MegaMenuListItem>
        <MegaMenuListItem>Jewellery</MegaMenuListItem>
        <MegaMenuListItem>Watches</MegaMenuListItem>
        <MegaMenuListItem>Sunglasses</MegaMenuListItem>
        <MegaMenuListItem>Purses</MegaMenuListItem>
        <MegaMenuListItem>Gloves</MegaMenuListItem>
        <MegaMenuListItem>Socks & tights</MegaMenuListItem>
      </MegaMenuList>
      <MegaMenuLine />
      <MegaMenuBanner>
        <img src={BoyImg} alt="" />
        <MegaMenuBannerText>Back to school. Sale up to 50%</MegaMenuBannerText>
        <Button
          icon="next"
          iconPosition="after"
          styleType="default"
          size="small"
          variant="outlined"
          disabled={false}
        >
          See offers
        </Button>
      </MegaMenuBanner>
    </MegaMenuStyled>
  );
};

export default MegaMenu;
