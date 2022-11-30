import React from "react";
import { BrandsStyled, BrandsStyledItem } from "./Brands.styled";
import img1 from "./images/brand-logo_1.png";
import img2 from "./images/brand-logo_2.png";
import img3 from "./images/brand-logo_3.png";
import img4 from "./images/brand-logo_4.png";
import img5 from "./images/brand-logo_5.png";
import img6 from "./images/brand-logo_6.png";

const Brands: React.FC = () => {
  return (
    <BrandsStyled>
      <BrandsStyledItem src={img1} />
      <BrandsStyledItem src={img2} />
      <BrandsStyledItem src={img3} />
      <BrandsStyledItem src={img4} />
      <BrandsStyledItem src={img5} />
      <BrandsStyledItem src={img6} />
    </BrandsStyled>
  );
};

export default Brands;
