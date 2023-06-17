import React, { useState } from "react";
import ProductInterface, { ProductCartInterface } from "./types/Product.types";
import Button from "UI/Button/Button";
import Rating from "components/Rating/Rating";
import ProductAttributes from "components/ProductAttributes/ProductAttributes";
// import { Link } from "react-router-dom";

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
import API_URL, { IMG_URL } from "config";

const Product: React.FC<ProductCartInterface> = ({
  id,
  title,
  price,
  prices,
  rating = 0,
  sale = 0,
  wishlist = false,
  size,
  gallary,
  attributes = [],
  currency = "$",
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const gall = [];

  for (const img of gallary) {
    if (img !== null) {
      gall.push(img);
    }
  }
  // prices.map((price) => console.log(price.currency.symbol));
  // console.log(
  //   prices.find((price) => price.currency.symbol === currency)!.amount
  // );

  const newPrice = prices.find((price) => price.currency.symbol === currency)!;

  console.log(title, "PRODUCT");

  return (
    <ProductStyled size={size}>
      {/* <Link to={`/product/${id}`}> */}
      {sale > 0 && <ProductStyledSale>-{sale}%</ProductStyledSale>}
      <ProductStyledGalary>
        {gall.length > 1 && (
          <>
            <ProductStyledGallaryButton
              left
              onClick={() =>
                selectedImage < 1
                  ? setSelectedImage(gall.length - 1)
                  : setSelectedImage(selectedImage - 1)
              }
            >
              <TfiAngleLeft />
            </ProductStyledGallaryButton>

            {gall.map((image, index) => (
              <ProductStyledImage
                key={image}
                index={index}
                current={selectedImage}
                src={`${IMG_URL}${image}`}
                alt={title.concat(`${index}`)}
                active={index === selectedImage}
              />
            ))}

            <ProductStyledGallaryButton
              left={false}
              onClick={() =>
                selectedImage > gall.length - 2
                  ? setSelectedImage(0)
                  : setSelectedImage(selectedImage + 1)
              }
            >
              <TfiAngleRight />
            </ProductStyledGallaryButton>
          </>
        )}
        {gall.length === 1 && (
          <ProductStyledImage
            index={0}
            current={selectedImage}
            src={`${IMG_URL}${gall[selectedImage]}`}
            alt={title}
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
          <ProductStyledTitle>{title}</ProductStyledTitle>
          <ProductStyledPrice>
            <ProductStyledPriceText sale={sale > 0}>
              {sale === 0 && `${currency} ${newPrice.amount}`}
              {sale > 0 &&
                `${currency} ${
                  newPrice.amount - (newPrice.amount * sale) / 100
                }`}
            </ProductStyledPriceText>

            {sale > 0 && (
              <ProductStyledPriceSaleFrom>
                {currency}
                {newPrice.amount}
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
      {/* </Link> */}
    </ProductStyled>
  );
};

export default Product;
