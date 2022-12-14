import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const AdditionalInfoStyled = styled.section`
  display: block;
  margin-bottom: 32px;
  padding-bottom: 32px;

  border-bottom: 1px solid ${Colors.gray300};

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.gray800};
`;

export const AdditionalInfoStyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  colors: ${Colors.gray900};
`;

export const AdditionalInfoStyledArea = styled.textarea`
  display: block;
  width: 100%;
  height: 130px;
  padding: 16px 13px;
  margin-top: 8px;

  box-sizing: border-box;

  border-radius: 4px;
  border: 1px solid ${Colors.gray400};

  resize: none;

  font-family: inherit;

  &:placeholder {
    font-weight: 400;
    font-size: 16px;
    color: ${Colors.gray600};
  }

  &:focus {
    outline: none;
  }
`;
