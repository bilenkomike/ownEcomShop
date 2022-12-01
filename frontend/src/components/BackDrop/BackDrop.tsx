import React from "react";
import { BackDropStyled } from "./BackDrop.styled";

const BackDrop: React.FC<{ active: boolean }> = ({ active }) => {
  return <BackDropStyled active={active} />;
};

export default BackDrop;
