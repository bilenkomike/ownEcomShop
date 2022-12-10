import React from "react";
import { TextAreaStyled, TextAreaStyledLabel } from "./TextArea.styled";

const TextArea: React.FC<{ label: string; placeholder?: string }> = ({
  label,
  placeholder,
}) => {
  return (
    <>
      <TextAreaStyledLabel htmlFor="textarea">{label}</TextAreaStyledLabel>
      <TextAreaStyled id="textarea" placeholder={placeholder}></TextAreaStyled>
    </>
  );
};

export default TextArea;
