import React from "react";

import { InputStyled } from "./Input.styled";

interface Variant {
  variant: "large" | "default" | "small";
  label?: string;
  type: string;
  placeholder?: string;
  list?: string[];
  success?: boolean;
  error?: boolean;
  value?: string;
  additionalText?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Variant> = ({
  value,
  placeholder,
  type,
  variant,
  onChange,
}) => {
  return (
    <InputStyled
      placeholder={placeholder}
      type={type}
      variant={variant}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
