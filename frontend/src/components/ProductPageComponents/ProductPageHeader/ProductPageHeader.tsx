import React from "react";
import { ProductPageHeaderStyled } from "./ProductPageHeader.styled";
import Title from "components/Title/Title";
import ProductPagePagination from "components/ProductPageComponents/ProductPagePagination/ProductPagePagination";
import { Link } from "react-router-dom";

const ProductPageHeader: React.FC<{
  active: boolean[];
  changeBody: (id: number) => void;
}> = ({ changeBody, active }) => {
  return (
    <ProductPageHeaderStyled>
      <div>
        <Title>Basic hooded sweatshirt in pink</Title>
        <span>
          <Link to="/products/women/clothes/sport-cap/details">Details</Link>
          Art. No.
          <span>x 183260098</span>
        </span>
      </div>

      <ProductPagePagination changeBody={changeBody} active={active} />
    </ProductPageHeaderStyled>
  );
};

export default ProductPageHeader;
