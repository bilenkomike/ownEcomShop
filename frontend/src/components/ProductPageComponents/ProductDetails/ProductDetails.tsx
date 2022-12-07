import React from "react";
import Product from "../../Product/Product";
import {
  ProductDetailsStyled,
  ProductDetailsStyledContent,
  ProductDetailsStyledList,
} from "./ProductDetails.styled";
import img from "./images/image.png";

const ProductDetails: React.FC = () => {
  return (
    <ProductDetailsStyled>
      <ProductDetailsStyledContent>
        <ProductDetailsStyledList>
          <li>Brand: Jordan</li>
          <li>Color: gray / red / yellow</li>
          <li>Mid-cut design</li>
          <li>Lace-up fastening</li>
          <li>Rubber outsole pods for durability and traction</li>
          <li>Moulded grooves in forefoot offer added flexibility</li>
          <li>
            Padded cuff with inner nodes designed to offer comfort and support
            around the Achilles tendon
          </li>
        </ProductDetailsStyledList>
      </ProductDetailsStyledContent>
      <Product
        key={1}
        size="large"
        id="black-and-white-sport-cap"
        name="Black and white sport cap"
        price={18.5}
        currency="$"
        gallary={[img, img, img]}
        rating={4}
        wishlist={false}
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
    </ProductDetailsStyled>
  );
};

export default ProductDetails;