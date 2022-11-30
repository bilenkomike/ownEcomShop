import React from "react";
import appleImg from "./images/apple.png";
import androidImg from "./images/android.png";
import appleText from "./images/apple-text.png";
import androidText from "./images/android-text.png";
import {
  DownloadAppButtonsStyled,
  DownloadAppButtonsStyledButton,
  DownloadAppButtonsStyledButtonDescription,
  DownloadAppButtonsStyledButtonImage,
  DownloadAppStyledButttonText,
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
          <DownloadAppStyledButttonText src={appleText} />
        </DownloadAppButtonsStyledButtonDescription>
      </DownloadAppButtonsStyledButton>

      <DownloadAppButtonsStyledButton>
        <DownloadAppButtonsStyledButtonImage
          src={androidImg}
          alt={"apple download app"}
        />
        <DownloadAppButtonsStyledButtonDescription>
          <DownloadAppStyledButttonText src={androidText} />
        </DownloadAppButtonsStyledButtonDescription>
      </DownloadAppButtonsStyledButton>
    </DownloadAppButtonsStyled>
  );
};

export default DownloadAppButtons;
