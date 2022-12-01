import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Links from "./constants/links/Links";

import Header from "./components/Header/Header";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import BackDrop from "./components/BackDrop/BackDrop";

const App: React.FunctionComponent = () => {
  const [backdrop, setBackdrop] = useState(false);

  const togglebackDrop = () => {
    setBackdrop(!backdrop);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div>
      <Header toggleBackDrop={togglebackDrop} />
      <BackDrop active={backdrop} />
      <Routes>
        <Route path={Links.home} element={<HomePage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
