import React from "react";
import { ButtonStyled } from "./Button.styled";
import {
  BsArrowRight,
  BsCart,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsGoogle,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiCreditCard } from "react-icons/ti";
import ButtonInterface from "./types/Button.types";
import img from "./images/img.png";

const Button: React.FC<ButtonInterface> = ({
  children = "",
  icon,
  iconPosition = "before",
  size,
  variant,
  styleType,
  disabled = false,
  type = "button",
}) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      variant={variant}
      styleType={styleType}
      disabled={disabled}
      style={{ width: icon === "cart" ? "100%" : "" }}
    >
      {icon && iconPosition === "before" && icon === "facebook" && (
        <FaFacebookF style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}

      {icon && iconPosition === "before" && icon === "twitter" && (
        <BsTwitter style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}
      {icon && iconPosition === "before" && icon === "youtube" && (
        <BsYoutube style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}

      {icon && iconPosition === "before" && icon === "pinterest" && (
        <BsPinterest style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}

      {icon && iconPosition === "before" && icon === "google" && (
        <BsGoogle style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}
      {icon && iconPosition === "before" && icon === "linkedin" && (
        <FaLinkedinIn style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}

      {icon && iconPosition === "before" && icon === "next" && (
        <BsArrowRight style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}

      {icon && iconPosition === "before" && icon === "instagram" && (
        <BsInstagram style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}
      {icon && iconPosition === "before" && icon === "cart" && (
        <BsCart style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}
      {icon && iconPosition === "before" && icon === "card" && (
        <TiCreditCard style={{ marginRight: size !== "social" ? 6 : "" }} />
      )}
      {icon && iconPosition === "before" && icon === "filter" && (
        <img
          src={img}
          alt="filter"
          style={{ marginRight: size !== "social" ? 6 : "" }}
        />
      )}
      {children}
      {icon && iconPosition === "after" && icon === "next" && (
        <BsArrowRight style={{ marginLeft: size !== "social" ? 6 : "" }} />
      )}
    </ButtonStyled>
  );
};

export default Button;

// (props) => {
