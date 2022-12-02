import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Links from "./constants/links/Links";

import Header from "./components/Header/Header";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import BackDrop from "./components/BackDrop/BackDrop";

import Login from "./components/AuthComponents/Login/Login";
import Register from "./components/AuthComponents/Register/Register";

const App: React.FunctionComponent = () => {
  const [backdrop, setBackdrop] = useState(false);

  const [backdropAuth, setBackdropAuth] = useState(true);

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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

      <Routes>
        <Route path={Links.home} element={<HomePage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
