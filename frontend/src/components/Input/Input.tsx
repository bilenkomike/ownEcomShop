import React from "react";

import { InputStyled, InputStyledLabel } from "./Input.styled";

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
  label,
}) => {
  const id = Math.random().toString();
  return (
    <div>
      <InputStyledLabel htmlFor={id}>{label}</InputStyledLabel>
      <InputStyled
        id={id}
        placeholder={placeholder}
        type={type}
        variant={variant}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
