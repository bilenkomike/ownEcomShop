import React from "react";
import { Routes, Route } from "react-router-dom";

import Links from "./constants/links/Links";

import Header from "./components/Header/Header";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={Links.home} element={<HomePage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
