import React from "react";
import { TextAreaStyled, TextAreaStyledLabel } from "./TextArea.styled";

const TextArea: React.FC<{
  label: string;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
}> = ({ label, placeholder, value, onChange }) => {
  return (
    <>
      <TextAreaStyledLabel htmlFor="textarea">{label}</TextAreaStyledLabel>
      <TextAreaStyled
        id="textarea"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      >
        {value}
      </TextAreaStyled>
    </>
  );
};

export default TextArea;
