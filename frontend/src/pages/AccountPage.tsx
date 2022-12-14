import AccountMenu from "components/AccountComponents/AccountMenu/AccountMenu";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import Links from "constants/links/Links";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AccountPage = () => {
  return (
    <>
      <BreadCrumbs
        params={[
          { key: "account", value: "Account" },
          { key: "profile", value: "MyProfile" },
        ]}
      />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <AccountMenu />
          <div>
            <Routes>
              {/* <Route path={Links.accountProfile} element={ /> */}
            </Routes>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AccountPage;
