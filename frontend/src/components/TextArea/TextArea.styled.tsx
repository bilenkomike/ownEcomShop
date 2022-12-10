import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  display: block;
  width: 100%;
  height: 107px;
  padding: 11px 16px;
  box-sizing: border-box;

  background: ${Colors.white};
  border: 1px solid ${Colors.gray400};
  border-radius: 4px;

  resize: vertical;

  &:placeholder {
    font-family: "Lato", sans-serif;
    color: ${Colors.gray600};
    font-weight: 400;
    font-size: 14px;
  }
`;

export const TextAreaStyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};
`;
