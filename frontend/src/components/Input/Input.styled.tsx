import styled from "styled-components";

import Colors from "../../constants/ui/colors/Colors";

export const InputStyled = styled.input<{
  variant: "large" | "default" | "small";
}>`
  display: block;
  width: 390px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 16px;
  border-radius: 4px;
  border: 1px solid ${Colors.gray400};
  box-sizing: border-box;

  font-size: 14px;
  color: ${Colors.gray900};

  transition: border 0.1s linear, box-shadow 0.1s linear;

  &:focus {
    border: 1px solid ${Colors.primary};
    outline: none;
    box-shadow: 0px 80px 80px -20px rgba(23, 105, 106, 0.08),
      0px 30px 24px -10px rgba(23, 105, 106, 0.05),
      0px 12px 10px -6px rgba(23, 105, 106, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  }
  &:placeholder {
    color: ${Colors.gray600};
  }
`;

export const InputStyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};
`;
