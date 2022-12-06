import React from "react";
import { ProductsFilterStyled } from "./ProductsFilter.styled";
import ProductsFilterList from "./ProductsFilterList";

const ProductsFilter: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <ProductsFilterStyled active={active}>
      <ProductsFilterList />
      <ProductsFilterList />
    </ProductsFilterStyled>
  );
};

export default ProductsFilter;
