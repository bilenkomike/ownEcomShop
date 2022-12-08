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
      <ProductPagePadinationStyledItem
        to={""}

        // onClick={() => changeBody(0)}
      >
        General Info
      </ProductPagePadinationStyledItem>
      <ProductPagePadinationStyledItem
        style={(navData: any) => navData.isActive && { color: "blue" }}
        to={"details"}

        // onClick={() => changeBody(1)}
      >
        Product details
      </ProductPagePadinationStyledItem>
      <ProductPagePadinationStyledItem
        style={(navData: any) => navData.isActive && { color: "blue" }}
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
