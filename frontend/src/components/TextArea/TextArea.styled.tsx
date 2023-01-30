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

  font-family: "Lato", sans-serif;
  color: ${Colors.gray800};
  font-weight: 400;
  font-size: 14px;

  &::placeholder {
    font-family: "Lato", sans-serif;
    color: ${Colors.gray600};
    font-weight: 400;
    font-size: 14px;
  }

  &:focus {
    border: 1px solid ${Colors.primary};
    outline: none;
    box-shadow: (
      0px 80px 80px -20px rgba(23, 105, 106, 0.08),
      0px 30px 24px -10px rgba(23, 105, 106, 0.05),
      0px 12px 10px -6px rgba(23, 105, 106, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03)
    );
  }
`;

export const TextAreaStyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};
`;
