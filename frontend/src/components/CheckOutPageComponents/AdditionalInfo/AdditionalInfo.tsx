import React from "react";
import {
  AdditionalInfoStyled,
  AdditionalInfoStyledArea,
  AdditionalInfoStyledHeader,
} from "./AdditionalInfo.styled";

const AdditionalInfo = () => {
  return (
    <AdditionalInfoStyled>
      <AdditionalInfoStyledHeader>
        5. Additional Information (Optional)
      </AdditionalInfoStyledHeader>
      Oreder Notes
      <AdditionalInfoStyledArea placeholder="Notes about your order, e.g. special noted for delivery."></AdditionalInfoStyledArea>
    </AdditionalInfoStyled>
  );
};

export default AdditionalInfo;
