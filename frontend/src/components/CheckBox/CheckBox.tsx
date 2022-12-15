import React, { useState } from "react";

import checkImg from "./images/check.png";
import { CheckboxStyled, CheckboxStyledField } from "./CheckBox.styled";

const CheckBox: React.FC<{ text: string; additionalText?: string }> = ({
  text,
  additionalText,
}) => {
  const [check, setCheck] = useState(false);

  const cheked = () => {
    setCheck(!check);
  };
  return (
    <CheckboxStyledField onClick={cheked}>
      <CheckboxStyled active={check}>
        <span>
          <img src={checkImg} alt="" />
        </span>
      </CheckboxStyled>
      {text} {additionalText && <span>({additionalText})</span>}
    </CheckboxStyledField>
  );
};

export default CheckBox;
