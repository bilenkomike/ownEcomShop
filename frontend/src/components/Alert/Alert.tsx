import React from "react";
import { AlertStyled } from "./Alert.styled";

export type AlertVariant = "warning" | "danger" | "info" | "success";

interface AlertInterface {
  variant: AlertVariant;
  children: string | React.ReactNode;
}

const Alert: React.FC<AlertInterface> = ({ variant, children }) => {
  return <AlertStyled variant={variant}>{children}</AlertStyled>;
};

export default Alert;
