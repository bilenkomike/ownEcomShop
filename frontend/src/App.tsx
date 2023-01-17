import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Links from "constants/links/Links";

import Header from "components/Header/Header";
import Subscribe from "components/Subscribe/Subscribe";
import Footer from "components/Footer/Footer";

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

const stripePromise = loadStripe(
  "pk_test_51MEYeaEt3uw5zLqo1svTqEqOFiqW0O82IhfoNDjdDDbbWHZqDHHteFPht6exwl9prYuObR5tvVFU7vfURhTs8K21005M2gkIcw"
);

const App: React.FunctionComponent = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [review, setReview] = useState(false);

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

  return (
    <div>
      <Header
        toggleBackDrop={togglebackDrop}
        togglebackDropLogin={togglebackLogin}
        togglebackDropRegister={togglebackRegister}
      />
      <BackDrop active={backdrop} />
      {login && <Login toggleLogin={togglebackLogin} />}
      {register && <Register toggleRegister={togglebackRegister} />}

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

          <Route path={Links.checkout} element={<CheckOutPage />} />

          <Route path={Links.account} element={<AccountPage />}>
            <Route path={Links.accountProfile} element={<AccountPage />} />
            <Route path={Links.accountOrders} element={<AccountPage />} />
            <Route path={Links.accountWislist} element={<AccountPage />} />
            <Route path={Links.accountRecent} element={<AccountPage />} />
            <Route path={Links.accountReviews} element={<AccountPage />} />
          </Route>
        </Routes>
      </Elements>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
