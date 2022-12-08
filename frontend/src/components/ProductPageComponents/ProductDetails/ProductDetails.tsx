import React from "react";
import Product from "components/Product/Product";
import img from "./images/image.png";
import {
  ProductDetailsStyled,
  ProductDetailsStyledContent,
  ProductDetailsStyledList,
} from "./ProductDetails.styled";

import handWash from "./images/hand-wash.png";
import noIroning from "./images/no-ironing.png";
import noBleach from "./images/no-bleach.png";
import noTumbleDry from "./images/no-tumble-dry.png";

const ProductDetails: React.FC = () => {
  return (
    <ProductDetailsStyled>
      <ProductDetailsStyledContent>
        <h3>Details</h3>
        <p>
          Id habitant tempor aliquam vulputate enim velit tincidunt sed. Urna
          sed facilisis nulla feugiat amet venenatis. Id suspendisse ut quis
          tellus aliquam pellentesque neque, semper donec.
        </p>
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

        <h3>Fabric</h3>

        <ProductDetailsStyledList>
          <li>Upper: 50% real leather, 50% textile</li>
          <li>Lining: 100% textile</li>
          <li>Sole: 100% other materials</li>
        </ProductDetailsStyledList>

        <h3>Care</h3>

        <ProductDetailsStyledList>
          <li>
            <img src={handWash} alt="" /> Hand wash only (30°)
          </li>
          <li>
            <img src={noIroning} alt="" />
            No ironing
          </li>
          <li>
            <img src={noBleach} alt="" />
            Do not use any bleach
          </li>
          <li>
            <img src={noTumbleDry} alt="" />
            Do not tumble dry
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
