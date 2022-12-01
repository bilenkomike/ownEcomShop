import React, { useState } from "react";

import Product from "../../Product/Product";
import img from "./images/product/small/image.png";
import img2 from "./images/product/small/imageimage_2.png";
import img3 from "./images/product/small/imageimage_3.png";
import img4 from "./images/product/small/imageimage_4.png";
import img5 from "./images/product/small/image_5.png";
import img6 from "./images/product/small/image_6.png";
import Title from "../../Title/Title";
import Carousel from "../../Carousel/Carousel";

import {
  NewArrivalsStyled,
  NewArrivalsStyledLink,
  NewArrivalsStyledList,
  NewArrivalsStyledListPagination,
  NewArrivalsStyledListPaginationItem,
  NewArrivalsStyledDescription,
} from "./NewArrivals.styled";

const NewArrivals: React.FC = () => {
  const [page, setPage] = useState(0);
  const array = ["", "", "", ""];
  return (
    <NewArrivalsStyled>
      <Title> New arrivals</Title>
      <NewArrivalsStyledDescription>
        Check out our latest arrivals for the upcoming season
      </NewArrivalsStyledDescription>
      <NewArrivalsStyledLink to="/">
        See the collection here
      </NewArrivalsStyledLink>
      <Carousel widthType="%" currentSlide={page}>
        <NewArrivalsStyledList>
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
            key={2}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img2]}
            sale={50}
          />
          <Product
            key={3}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img3]}
            sale={33}
          />
          <Product
            key={4}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img4]}
            sale={50}
          />

          <Product
            key={5}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img5]}
            sale={50}
          />
          <Product
            key={6}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img6]}
            sale={50}
          />
        </NewArrivalsStyledList>
        <NewArrivalsStyledList>
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
            key={2}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img2]}
            sale={50}
          />
          <Product
            key={3}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img3]}
            sale={33}
          />
          <Product
            key={4}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img4]}
            sale={50}
          />

          <Product
            key={5}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img5]}
            sale={50}
          />
          <Product
            key={6}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img6]}
            sale={50}
          />
        </NewArrivalsStyledList>
        <NewArrivalsStyledList>
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
            key={2}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img2]}
            sale={50}
          />
          <Product
            key={3}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img3]}
            sale={33}
          />
          <Product
            key={4}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img4]}
            sale={50}
          />

          <Product
            key={5}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img5]}
            sale={50}
          />
          <Product
            key={6}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img6]}
            sale={50}
          />
        </NewArrivalsStyledList>
        <NewArrivalsStyledList>
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
            key={2}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img2]}
            sale={50}
          />
          <Product
            key={3}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img3]}
            sale={33}
          />
          <Product
            key={4}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img4]}
            sale={50}
          />

          <Product
            key={5}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img5]}
            sale={50}
          />
          <Product
            key={6}
            size="small"
            id="black-and-white-sport-cap1"
            name="Black and white sport cap"
            price={18.5}
            currency="$"
            gallary={[img6]}
            sale={50}
          />
        </NewArrivalsStyledList>
      </Carousel>
      <NewArrivalsStyledListPagination>
        {array.map((item, index) => (
          <NewArrivalsStyledListPaginationItem
            active={index === page}
            onClick={() => setPage(index)}
          ></NewArrivalsStyledListPaginationItem>
        ))}
      </NewArrivalsStyledListPagination>
    </NewArrivalsStyled>
  );
};

export default NewArrivals;
