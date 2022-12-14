import React from "react";
import appleImg from "./images/apple.svg";
import androidImg from "./images/android.svg";
import {
  DownloadAppButtonsStyled,
  DownloadAppButtonsStyledButton,
  DownloadAppButtonsStyledButtonDescription,
  DownloadAppButtonsStyledButtonImage,
} from "./DownloadAppButtons.styled";

const DownloadAppButtons: React.FC = () => {
  return (
    <DownloadAppButtonsStyled>
      <DownloadAppButtonsStyledButton>
        <DownloadAppButtonsStyledButtonImage
          src={appleImg}
          alt={"apple download app"}
        />
        <DownloadAppButtonsStyledButtonDescription>
          <span style={{ textTransform: "capitalize" }}>Download on the</span>
          <span>App Store</span>
        </DownloadAppButtonsStyledButtonDescription>
      </DownloadAppButtonsStyledButton>

      <DownloadAppButtonsStyledButton>
        <DownloadAppButtonsStyledButtonImage
          src={androidImg}
          alt={"apple download app"}
        />
        <DownloadAppButtonsStyledButtonDescription>
          <span>Get it on</span>
          <span>Google Play</span>
        </DownloadAppButtonsStyledButtonDescription>
      </DownloadAppButtonsStyledButton>
    </DownloadAppButtonsStyled>
  );
};

export default DownloadAppButtons;
