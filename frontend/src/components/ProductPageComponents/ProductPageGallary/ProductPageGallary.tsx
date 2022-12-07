import React, { useState } from "react";
import {
  ProductPageGallaryList,
  ProductPageGallaryListItem,
  ProductPageGallaryStyled,
  ProductPageGallaryStyledMainImage,
  ProductPageGallaryStyledButton,
} from "./ProductPageGallary.styled";
import img from "./images/image.png";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const ProductPageGallary = () => {
  const images = [
    "http://localhost:3000/static/media/image.92527e52c512a15b40a3.png",
    "http://localhost:3000/static/media/image.92527e52c512a15b40a3.png",
    "http://localhost:3000/static/media/image.92527e52c512a15b40a3.png",
    "http://localhost:3000/static/media/image.92527e52c512a15b40a3.png",
  ];
  const [index, setIndex] = useState(0);
  const array = ["", "", "", ""];
  return (
    <ProductPageGallaryStyled>
      <span>
        <ProductPageGallaryStyledButton
          left
          onClick={() => index > 0 && setIndex(index - 1)}
          disabled={index === 0}
        >
          <BsArrowLeft />
        </ProductPageGallaryStyledButton>
        <ProductPageGallaryStyledMainImage src={images[index]} />

        <ProductPageGallaryStyledButton
          left={false}
          disabled={index === array.length - 1}
          onClick={() => index < array.length - 1 && setIndex(index + 1)}
        >
          <BsArrowRight />
        </ProductPageGallaryStyledButton>
      </span>
      <ProductPageGallaryList>
        {images.map((image: string, id: number) => (
          <ProductPageGallaryListItem
            active={index === id}
            src={image}
            key={`image_product_key=${id}`}
            video={id === images.length - 1}
          />
        ))}
        <div>
          <AiOutlinePlayCircle />
          <ProductPageGallaryListItem
            active={false}
            video={true}
            src={img}
            // active={index === 0}
            // src={image}
            // key={`image_product_key=${index}`}
            // video={index === images.length - 1}
          />
        </div>
      </ProductPageGallaryList>
    </ProductPageGallaryStyled>
  );
};

export default ProductPageGallary;
