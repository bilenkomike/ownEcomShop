import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import {
  InputStyled,
  InputStyledLabel,
  InputStyledIcon,
  InputStyledCOntainer,
  InputStyledSelectOptions,
  InputStyledSelectOption,
} from "./Input.styled";

import { TfiAngleDown } from "react-icons/tfi";

import InputInterface, { Option } from "./types/Input.types";

const Input: React.FC<InputInterface> = ({
  name,
  value,
  placeholder,
  type,
  variant,
  onChange,
  label,
  max = 1,
  min = 1,
  step = 1,
  options = [],
  icon,
  iconTypes = "button",
}) => {
  const [select, setSelect] = useState(false);

  const id = [
    type.toLowerCase(),
    variant.toLowerCase(),
    name.toLowerCase(),
  ].join("-");
  let inpprops = {};

  switch (type) {
    case "number":
      inpprops = {
        max,
        min,
        step,
      };
      break;
    default:
      inpprops = {};
      break;
  }

  const onValueChanges = (value: string | number) => {
    onChange(value.toString());
  };

  return (
    <InputStyledCOntainer>
      {label && <InputStyledLabel htmlFor={id}>{label}</InputStyledLabel>}
      <InputStyled
        autoComplete="off"
        readOnly={type === "select"}
        inputType={type}
        onClick={() => type === "select" && setSelect(!select)}
        id={id}
        placeholder={placeholder}
        type={type}
        variant={variant}
        value={value}
        onChange={(e) => type !== "select" && onValueChanges(e.target.value)}
        {...inpprops}
      />
      {icon && icon === "search" ? (
        <InputStyledIcon type={iconTypes}>
          <AiOutlineSearch />
        </InputStyledIcon>
      ) : icon === "select" ? (
        <InputStyledIcon
          active={select}
          type={iconTypes}
          onClick={() => {
            setSelect(!select);
          }}
        >
          <TfiAngleDown />
        </InputStyledIcon>
      ) : null}

      {options.length > 0 && (
        <InputStyledSelectOptions active={select} length={options.length}>
          {options.map((option: Option) => (
            <InputStyledSelectOption
              onClick={() => {
                setSelect(!select);
                onValueChanges(option.value);
              }}
            >
              {option.label}
            </InputStyledSelectOption>
          ))}
        </InputStyledSelectOptions>
      )}
    </InputStyledCOntainer>
  );
};

export default Input;
