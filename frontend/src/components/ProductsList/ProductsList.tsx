import React, { useEffect, useState } from "react";
import {
  ProductsListStyled,
  ProductsListStyledContainer,
} from "./ProductsList.styled";
import Product from "components/Product/Product";
import ProductsFilter from "components/ProductsFilter/ProductsFilter";
import { useParams } from "react-router-dom";

import { ProductCartInterface } from "components/Product/types/Product.types";

const ProductsList: React.FC<{
  showFilter: boolean;
  products: ProductCartInterface[];
}> = ({ showFilter, products }) => {
  return (
    <ProductsListStyledContainer>
      <ProductsFilter active={showFilter} />
      <ProductsListStyled activeSort={showFilter}>
        {products.length > 0 ? (
          products.map((product: ProductCartInterface) => (
            <Product
              key={product.art_no}
              size="small"
              id="black-and-white-sport-cap"
              title={product.title}
              prices={product.prices}
              // price={18.5}
              currency="$"
              gallary={[
                product.image_1,
                product.image_2,
                product.image_3,
                product.image_4,
              ]}
              rating={4}
              attributes={product.attributes}
              // attributes={[
              //   {
              //     id: "size",
              //     type: "text",
              //     items: [
              //       { name: "S", value: "S" },
              //       { name: "M", value: "M" },
              //       { name: "L", value: "L" },
              //       { name: "XL", value: "XL" },
              //     ],
              //     selectedValue: "XL",
              //   },
              //   {
              //     id: "color",
              //     type: "color",
              //     items: [
              //       { name: "#C0DDED", value: "#C0DDED" },
              //       { name: "#874E19", value: "#874E19" },
              //       { name: "#000000", value: "#000000" },
              //     ],
              //     selectedValue: "#000000",
              //   },
              // ]}
            />
          ))
        ) : (
          <></>
        )}
      </ProductsListStyled>
    </ProductsListStyledContainer>
  );
};

export default ProductsList;
