import React, { useState, useEffect } from "react";
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
import { useTypedDispatch, useTypedSelector } from "store/hooks";

type MenuDataType = {
  id: number;
  name: string;
  categories: {
    id: number;
    name: string;
    type: number;
    subbcategories:
      | {
          id: number;
          name: string;
          catergory: number;
        }[]
      | [];
  }[];
};

const MegaMenu: React.FC<{
  type?: string;
  data: MenuDataType[];
  active: boolean;
}> = ({ type = "Women", data, active }) => {
  // const active = useTypedSelector((state) => state.backdropSlice.open);
  const [menuData, setMenuData] = useState<MenuDataType | null>(null);
  useEffect(() => {
    const newData = data.find((item) => item.name === type);
    if (newData) {
      setMenuData(newData);
    } else {
      setMenuData(null);
    }
  }, [data, type]);
  return (
    <MegaMenuStyled active={active} onClick={(e) => e.stopPropagation()}>
      <MegaMenuList>
        <MegaMenuListItem>New collection</MegaMenuListItem>
        <MegaMenuListItem>Best Sellers</MegaMenuListItem>
        <MegaMenuListItem>Plus Size</MegaMenuListItem>
        <MegaMenuListItem style={{ color: Colors.danger }}>
          Sale up to 70%
        </MegaMenuListItem>
      </MegaMenuList>
      {menuData !== null &&
        menuData.categories.map((category) => (
          <MegaMenuList key={`megamenu_item_${category.id}`}>
            {/* make here a link on each item even on title */}
            <MegaMenuListTitle>{category.name.toUpperCase()}</MegaMenuListTitle>

            {category.subbcategories.length > 0 &&
              category.subbcategories.map((item) => (
                <MegaMenuListItem key={item.name}>{item.name}</MegaMenuListItem>
              ))}
          </MegaMenuList>
        ))}

      <MegaMenuLine />
      <MegaMenuBanner>
        {/* complete sales block */}
        <img src={BoyImg} alt="boy" />
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
