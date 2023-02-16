import React from "react";
import "./Title.scss";

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <h2 className="title">{children}</h2>;
};

export default Title;
