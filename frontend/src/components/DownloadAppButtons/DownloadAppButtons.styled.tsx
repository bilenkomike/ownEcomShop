import styled from "styled-components";
import Colors from "../../constants/ui/colors/Colors";

export const DownloadAppButtonsStyled = styled.div`
  display: flex;
`;

export const DownloadAppButtonsStyledButton = styled.button`
  display: flex;

  padding: 6px 14px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${Colors.gray800};

  color: ${Colors.white};

  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
`;

export const DownloadAppButtonsStyledButtonImage = styled.img`
  display: block;
  width: 24.91px;
  height: 30.61px;
  margin-right: 10px;
`;

export const DownloadAppButtonsStyledButtonDescription = styled.div`
  display: block;
  text-align: left;
`;

export const DownloadAppStyledButttonText = styled.img`
  display: block;
  width: 101.52px;
  height: 32.51px;
`;
