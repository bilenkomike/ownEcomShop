import Colors from "constants/ui/colors/Colors";
import styled from "styled-components";

export const InputFileStyled = styled.div``;

export const InputFileStyledInput = styled.input`
  height: 0;
  widht: 0;
  opactiy: 0;
  font-size: 0;
  padding: 0;
  border: none;
`;

export const InputFileStyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.gray800};
  & > div {
    margin-top: 10px;
  }
`;

export const InputFileStyledContainer = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;

  position: relative;

  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.gray800};

  border: 1px dashed ${Colors.gray600};
  border-radius: 4px;

  & > button {
    margin: 0 auto;
  }
`;
