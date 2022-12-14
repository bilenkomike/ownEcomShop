import React from "react";
import {
  RadioButtonStyled,
  RadioButtonStyledLabel,
} from "./RadioButton.styled";

interface RadioButtonInterface {
  label: string;
  name: string;

  disabled?: boolean;

  value: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonInterface> = ({
  label,
  name,
  disabled = false,
  value,
  checked = false,
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
}) => {
  return (
    <RadioButtonStyled>
      <input
        onChange={onChange}
        value={value}
        // checked={checked}
        type="radio"
        name={name}
        id={
          name +
          label.toLowerCase().split(" ").join("-") +
          "-" +
          value.toString()
        }
        disabled={disabled}
      />
      <RadioButtonStyledLabel
        disabled={disabled}
        htmlFor={
          name +
          label.toLowerCase().split(" ").join("-") +
          "-" +
          value.toString()
        }
      >
        {label}
      </RadioButtonStyledLabel>
    </RadioButtonStyled>
  );
};

export default RadioButton;
