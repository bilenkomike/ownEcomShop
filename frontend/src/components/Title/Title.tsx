import React from "react";
import { TitleStyled } from "./Title.styled";

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
