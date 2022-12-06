import React, { useState } from "react";
import {
  ProductsListStyled,
  ProductsListStyledContainer,
} from "./ProductsList.styled";
import Product from "../Product/Product";
import img from "./images/image.png";
import ProductsFilter from "../ProductsFilter/ProductsFilter";

const ProductsList: React.FC<{ showFilter: boolean }> = ({ showFilter }) => {
  return (
    <ProductsListStyledContainer>
      <ProductsFilter active={showFilter} />
      <ProductsListStyled activeSort={showFilter}>
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
        <Product
          key={1}
          size="small"
          id="black-and-white-sport-cap"
          name="Black and white sport cap"
          price={18.5}
          currency="$"
          gallary={[img, img, img]}
          rating={4}
          wishlist
          attributes={[
            {
              id: "size",
              type: "text",
              items: [
                { name: "S", value: "S" },
                { name: "M", value: "M" },
                { name: "L", value: "L" },
                { name: "XL", value: "XL" },
              ],
              selectedValue: "XL",
            },
            {
              id: "color",
              type: "color",
              items: [
                { name: "#C0DDED", value: "#C0DDED" },
                { name: "#874E19", value: "#874E19" },
                { name: "#000000", value: "#000000" },
              ],
              selectedValue: "#000000",
            },
          ]}
        />
      </ProductsListStyled>
    </ProductsListStyledContainer>
  );
};

export default ProductsList;
