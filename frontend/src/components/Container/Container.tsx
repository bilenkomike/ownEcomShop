import React from "react";
import { ContainerStyled } from "./Container.styled";

const Container: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
