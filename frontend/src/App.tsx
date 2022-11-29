import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";

import { Routes, Route } from "react-router-dom";
import Links from "./constants/links/Links";

const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Header />

      <Route path={Links.home} element={<HomePage />} />
    </Routes>
  );
};

export default App;
