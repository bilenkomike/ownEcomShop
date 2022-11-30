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
  /* background: linear-gradient(
    0deg,
    rgba(26, 26, 26, 0.1) -0.24%,
    rgba(33, 33, 33, 0.151) 177.23%,
    rgba(53, 53, 53, 0.227) 444.15%,
    rgba(87, 87, 87, 0.318) 767.35%,
    rgba(133, 133, 133, 0.421) 1129.49%,
    rgba(179, 179, 179, 0.51) 1442.59%
  ); */

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
