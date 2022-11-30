import React from "react";
import { ButtonStyled } from "./Button.styled";
import { BsArrowRight, BsCart, BsInstagram } from "react-icons/bs";
import ButtonInterface from "./types/Button.types";

const Button: React.FC<ButtonInterface> = ({
  children,
  icon,
  iconPosition = "before",
  size,
  variant,
  styleType,
  disabled = false,
}) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      styleType={styleType}
      disabled={disabled}
      style={{ width: icon === "cart" ? "100%" : "" }}
    >
      {icon && iconPosition === "before" && icon === "next" && (
        <BsArrowRight style={{ marginRight: 6 }} />
      )}
      {icon && iconPosition === "before" && icon === "instagram" && (
        <BsInstagram style={{ marginRight: 6 }} />
      )}
      {icon && iconPosition === "before" && icon === "cart" && (
        <BsCart style={{ marginRight: 6 }} />
      )}
      {children}
      {icon && iconPosition === "after" && icon === "next" && (
        <BsArrowRight style={{ marginLeft: 6 }} />
      )}
    </ButtonStyled>
  );
};

export default Button;

// (props) => {
