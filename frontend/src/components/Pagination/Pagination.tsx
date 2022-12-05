import React from "react";
import { PaginationStyled, PaginationStyledItem } from "./Pagination.styled";
import { TfiArrowRight } from "react-icons/tfi";

const Pagination = () => {
  return (
    <PaginationStyled>
      <PaginationStyledItem active>1</PaginationStyledItem>
      <PaginationStyledItem>1</PaginationStyledItem>
      <PaginationStyledItem>1</PaginationStyledItem>
      <PaginationStyledItem>...</PaginationStyledItem>
      <PaginationStyledItem>10</PaginationStyledItem>
      <PaginationStyledItem>
        <TfiArrowRight />
      </PaginationStyledItem>
    </PaginationStyled>
  );
};

export default Pagination;
