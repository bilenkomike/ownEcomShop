import React, { useState } from "react";

import checkImg from "./images/check.png";
import { CheckboxStyled, CheckboxStyledField } from "./CheckBox.styled";

const CheckBox: React.FC<{
  text: string;
  additionalText?: string;
  onChange?: () => void;
  checked?: boolean;
}> = ({ text, additionalText, onChange = () => {}, checked = false }) => {
  return (
    <CheckboxStyledField onClick={onChange}>
      <CheckboxStyled active={checked} onChange={onChange}>
        <span>
          <img src={checkImg} alt="" />
        </span>
      </CheckboxStyled>
      {text} {additionalText && <span>({additionalText})</span>}
    </CheckboxStyledField>
  );
};

export default CheckBox;
