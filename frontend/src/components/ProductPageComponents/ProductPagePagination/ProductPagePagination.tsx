import React from "react";
import {
  ProductPagePaginationStyled,
  ProductPagePadinationStyledItem,
} from "./ProductPagePagination.styled";

const ProductPagePagination: React.FC<{
  active: boolean[];
  changeBody: (id: number) => void;
}> = ({ changeBody, active }) => {
  return (
    <ProductPagePaginationStyled>
      <ProductPagePadinationStyledItem to={""} end>
        General Info
      </ProductPagePadinationStyledItem>
      <ProductPagePadinationStyledItem
        to={"details"}

        // onClick={() => changeBody(1)}
      >
        Product details
      </ProductPagePadinationStyledItem>
      <ProductPagePadinationStyledItem
        to={"reviews"}

        // onClick={() => changeBody(2)}
      >
        Reviews
        <sup>12</sup>
      </ProductPagePadinationStyledItem>
    </ProductPagePaginationStyled>
  );
};

export default ProductPagePagination;
