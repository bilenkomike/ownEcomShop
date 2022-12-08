import React, { useState } from "react";
import { ProductsListStyledBottom } from "./ProductListBottom.styled";
import Input from "components/Input/Input";
import Pagination from "components/Pagination/Pagination";

const ProductListBottom = () => {
  const options = [
    { value: "popularity", label: "Popularity" },
    { value: "rating", label: "Rating" },
    { value: "amount", label: "Amount" },
  ];
  const [filter, setFilter] = useState("");
  const [perPage, setPerPage] = useState(0);
  return (
    <ProductsListStyledBottom>
      <span>
        <span>
          Sort by
          <Input
            name="filter-products-select"
            icon="select"
            variant="default"
            type="select"
            value={filter.charAt(0).toUpperCase() + filter.slice(1)}
            placeholder="Sort by..."
            onChange={(select) => setFilter(select)}
            options={options}
          />
        </span>
        <span>
          Show
          <Input
            name="products-per-page"
            variant="default"
            type="number"
            value={perPage}
            max={16}
            min={8}
            onChange={(select) => setPerPage(Number(select))}
          />
          <span>products per page</span>
        </span>
      </span>

      <Pagination />
    </ProductsListStyledBottom>
  );
};

export default ProductListBottom;
