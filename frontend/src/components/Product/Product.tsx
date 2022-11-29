import React, { useState } from "react";
import ProductInterface from "./types/Product.types";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import { Link } from "react-router-dom";

import {
  ProductStyled,
  ProductStyledGalary,
  ProductStyledImage,
  ProductStyledGallaryButton,
  ProductStyledTitle,
  ProductStyledSale,
  ProductStyledPrice,
  ProductStyledPriceSaleFrom,
  ProductStyledPriceText,
  ProductStyledHover,
  ProductStyledDescription,
  ProductStyledWishList,
} from "./Product.styled";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Product: React.FC<ProductInterface> = ({
  id,
  name,
  price,
  rating = 0,
  sale = 0,
  wishlist = false,
  size,
  gallary,
  attributes = [],
  currency,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <ProductStyled size={size}>
      <Link to={`/product/${id}`}>
        {sale > 0 && <ProductStyledSale>-{sale}%</ProductStyledSale>}
        <ProductStyledGalary>
          {gallary.length > 1 && (
            <>
              <ProductStyledGallaryButton
                left
                onClick={() =>
                  selectedImage < 1
                    ? setSelectedImage(gallary.length - 1)
                    : setSelectedImage(selectedImage - 1)
                }
              >
                <TfiAngleLeft />
              </ProductStyledGallaryButton>
              {gallary.map((image, index) => (
                <ProductStyledImage
                  key={image}
                  index={index}
                  current={selectedImage}
                  src={image}
                  alt={name.concat(`${index}`)}
                  active={index === selectedImage}
                />
              ))}
              <ProductStyledGallaryButton
                left={false}
                onClick={() =>
                  selectedImage > gallary.length - 2
                    ? setSelectedImage(0)
                    : setSelectedImage(selectedImage + 1)
                }
              >
                <TfiAngleRight />
              </ProductStyledGallaryButton>
            </>
          )}
          {gallary.length === 1 && (
            <ProductStyledImage
              index={0}
              current={selectedImage}
              src={gallary[selectedImage]}
              alt={name}
              active={0 === selectedImage}
            />
          )}
          <ProductStyledWishList wished={wishlist}>
            {!wishlist && <AiOutlineHeart />}
            {wishlist && <AiFillHeart />}
          </ProductStyledWishList>
        </ProductStyledGalary>
        <ProductStyledDescription>
          <div>
            <ProductStyledTitle>{name}</ProductStyledTitle>
            <ProductStyledPrice>
              <ProductStyledPriceText sale={sale > 0}>
                {sale === 0 && `${currency} ${price}`}
                {sale > 0 &&
                  `${currency} ${(price - (price * sale) / 100).toFixed(2)}`}
              </ProductStyledPriceText>

              {sale > 0 && (
                <ProductStyledPriceSaleFrom>
                  {currency}
                  {price}
                </ProductStyledPriceSaleFrom>
              )}
            </ProductStyledPrice>
          </div>

          {rating > 0 && <Rating absolute={true} rating={rating} />}

          <ProductStyledHover>
            {attributes.length > 0 && (
              <ProductAttributes attributes={attributes} />
            )}
            <span style={{ display: "block", marginTop: 20 }}>
              <Button
                size="small"
                icon="cart"
                iconPosition="before"
                variant="solid"
                styleType="default"
              >
                Add to cart
              </Button>
            </span>
          </ProductStyledHover>
        </ProductStyledDescription>
      </Link>
    </ProductStyled>
  );
};

export default Product;
