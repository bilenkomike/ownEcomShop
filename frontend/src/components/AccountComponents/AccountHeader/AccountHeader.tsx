import React from "react";
import {
  AccountHeaderStyled,
  AccountHeaderStyledTitle,
} from "./AccountHeader.styled";

const AccountHeader: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <AccountHeaderStyled>
      <AccountHeaderStyledTitle>{title}</AccountHeaderStyledTitle>
      {children}
    </AccountHeaderStyled>
  );
};

export default AccountHeader;
