import React from "react";
import DownloadAppButtons from "../../DownloadAppButtons/DownloadAppButtons";
import {
  CTAMobileAppStyled,
  CTAMobileAppStyledTitle,
  CTAMobileAppStyledImage,
} from "./CTAMobileApp.styled";
import img from "./images/image.png";

const CTAMobileApp: React.FC = () => {
  return (
    <CTAMobileAppStyled>
      <CTAMobileAppStyledTitle>
        Enjoy mobile shopping with our Createx Store App!
      </CTAMobileAppStyledTitle>
      <DownloadAppButtons />
      <CTAMobileAppStyledImage src={img} alt="CTA boy" />
    </CTAMobileAppStyled>
  );
};

export default CTAMobileApp;
