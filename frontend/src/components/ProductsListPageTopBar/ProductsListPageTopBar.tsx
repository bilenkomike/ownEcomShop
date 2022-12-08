import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Pagination from "../Pagination/Pagination";

import { ProductsListPageTopBarStyled } from "./ProductsListPageTopBar.styled";

const options = [
  { value: "popularity", label: "Popularity" },
  { value: "rating", label: "Rating" },
  { value: "amount", label: "Amount" },
];

const ProductsListPageTopBar: React.FC<{
  showFilter: boolean;
  handleshowFilter: () => void;
}> = ({ showFilter, handleshowFilter }) => {
  const [filter, setFilter] = useState("");
  const [perPage, setPerPage] = useState(0);
  return (
    <ProductsListPageTopBarStyled>
      {!showFilter && (
        <Button
          icon="filter"
          iconPosition="before"
          size="default"
          styleType="default"
          type="button"
          variant="solid"
          onClick={handleshowFilter}
        >
          Show filters
        </Button>
      )}
      {showFilter && (
        <Button
          icon="filter"
          iconPosition="before"
          size="default"
          styleType="default"
          type="button"
          variant="solid"
          onClick={handleshowFilter}
        >
          Hide filters
        </Button>
      )}
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

      <Pagination />
    </ProductsListPageTopBarStyled>
  );
};

export default ProductsListPageTopBar;
