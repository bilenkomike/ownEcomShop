import AccountMenu from "components/AccountComponents/AccountMenu/AccountMenu";
import Orders from "components/AccountComponents/Orders/Orders";
import Profile from "components/AccountComponents/Profile/Profile";
import Recent from "components/AccountComponents/Recent/Recent";
import Reviews from "components/AccountComponents/Reviews/Reviews";
import Wishlist from "components/AccountComponents/Wishlist/Wishlist";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import Links from "constants/links/Links";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useTypedSelector } from "store/hooks";

const AccountPage = () => {
  const user = useTypedSelector((state) => state.authSlice);
  const navigate = useNavigate();
  if (user.token === "") {
    console.log(user);
    navigate("/");
  }
  return (
    <>
      <BreadCrumbs
        params={[
          { key: "account", value: "Account" },
          { key: "profile", value: "MyProfile" },
        ]}
      />
      <div style={{ marginTop: 40, marginBottom: 180 }}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <AccountMenu />
            <div style={{ width: "70%" }}>
              <Routes>
                <Route
                  path={
                    Links.accountProfile.split("/")[
                      Links.accountProfile.split("/").length - 1
                    ]
                  }
                  element={<Profile />}
                />
                <Route
                  path={
                    Links.accountOrders.split("/")[
                      Links.accountOrders.split("/").length - 1
                    ]
                  }
                  element={<Orders />}
                />
                <Route
                  path={
                    Links.accountWislist.split("/")[
                      Links.accountWislist.split("/").length - 1
                    ]
                  }
                  element={<Wishlist />}
                />
                <Route
                  path={
                    Links.accountRecent.split("/")[
                      Links.accountRecent.split("/").length - 1
                    ]
                  }
                  element={<Recent />}
                />
                <Route
                  path={
                    Links.accountReviews.split("/")[
                      Links.accountReviews.split("/").length - 1
                    ]
                  }
                  element={<Reviews />}
                />
              </Routes>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AccountPage;
