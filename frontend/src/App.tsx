import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Links from "constants/links/Links";

import Header from "components/Header/Header";
import Subscribe from "components/Subscribe/Subscribe";
import Footer from "modules/Footer/Footer";

import HomePage from "pages/Home/HomePage";
import BackDrop from "components/BackDrop/BackDrop";

import Login from "components/AuthComponents/Login/Login";
import Register from "components/AuthComponents/Register/Register";

import MiniCart from "components/MiniCart/MiniCart";
import ProductsPage from "pages/Products/ProductsPage";
import ProductPage from "pages/Product/ProductPage";
import ReviewModal from "components/ProductPageComponents/ReviewModal/ReviewModal";
import CheckOutPage from "pages/CheckOutPage/CheckOutPage";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AccountPage from "pages/Account/AccountPage";
import ContactsPage from "pages/Contacts/ContactsPage";
import BlogPage from "pages/Blog/Blog";
import { useTypedSelector } from "store/hooks";

const stripePromise = loadStripe(
  "pk_test_51MEYeaEt3uw5zLqo1svTqEqOFiqW0O82IhfoNDjdDDbbWHZqDHHteFPht6exwl9prYuObR5tvVFU7vfURhTs8K21005M2gkIcw"
);

const App: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [backdrop, setBackdrop] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [review, setReview] = useState(false);

  const user = useTypedSelector((state) => state.authSlice);

  const togglebackDrop = () => {
    setBackdrop(!backdrop);
    document.body.classList.toggle("no-scroll");
  };

  const togglebackLogin = () => {
    document.body.classList.toggle("no-scroll");
    setLogin(!login);
  };

  const togglebackRegister = () => {
    document.body.classList.toggle("no-scroll");
    setRegister(!register);
  };

  const toggleReview = () => {
    document.body.classList.toggle("no-scroll");
    setReview(!review);
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <Header
        toggleBackDrop={togglebackDrop}
        togglebackDropLogin={togglebackLogin}
        togglebackDropRegister={togglebackRegister}
      />
      <BackDrop active={backdrop} />
      {user.token.length <= 0 && (
        <>
          {login && (
            <Login
              toggleRegister={togglebackRegister}
              toggleLogin={togglebackLogin}
            />
          )}
          {register && (
            <Register
              toggleLogin={togglebackLogin}
              toggleRegister={togglebackRegister}
            />
          )}
        </>
      )}

      {review && <ReviewModal onOpenReview={toggleReview} />}

      <MiniCart />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path={Links.home} element={<HomePage />} />
          <Route path={Links.category} element={<ProductsPage />} />
          <Route
            path={Links.product}
            element={
              <ProductPage review={review} onOpenReview={toggleReview} />
            }
          >
            <Route
              path={Links.productDetails}
              element={
                <ProductPage review={review} onOpenReview={toggleReview} />
              }
            />
            <Route
              path={Links.productReviews}
              element={
                <ProductPage review={review} onOpenReview={toggleReview} />
              }
            />
          </Route>
          <Route path={Links.contacts} element={<ContactsPage />}>
            <Route path={Links.contactStores} element={<ContactsPage />} />
            <Route path={Links.contactsFAQ} element={<ContactsPage />} />
          </Route>

          <Route path={Links.checkout} element={<CheckOutPage />} />

          {user.token.length > 0 && (
            <Route path={Links.account} element={<AccountPage />}>
              <Route path={Links.accountProfile} element={<AccountPage />} />
              <Route path={Links.accountOrders} element={<AccountPage />} />
              <Route path={Links.accountWislist} element={<AccountPage />} />
              <Route path={Links.accountRecent} element={<AccountPage />} />
              <Route path={Links.accountReviews} element={<AccountPage />} />
            </Route>
          )}
          {user.token.length <= 0 && (
            <Route path={Links.account} element={<Navigate to="/" />}>
              <Route
                path={Links.accountProfile}
                element={<Navigate to="/" />}
              />
              <Route path={Links.accountOrders} element={<Navigate to="/" />} />
              <Route
                path={Links.accountWislist}
                element={<Navigate to="/" />}
              />
              <Route path={Links.accountRecent} element={<Navigate to="/" />} />
              <Route
                path={Links.accountReviews}
                element={<Navigate to="/" />}
              />
            </Route>
          )}

          {/* <Route path={Links.blog} element={<BlogPage />}></Route> */}
          <Route path={Links.blog} element={<BlogPage />} />
        </Routes>
      </Elements>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
