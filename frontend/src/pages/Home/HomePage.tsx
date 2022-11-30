import React from "react";

import Intro from "../../components/HomePageComponents/Intro/Intro";
import TopCategories from "../../components/HomePageComponents/TopCategories/TopCategories";
import NewArrivals from "../../components/HomePageComponents/NewArrivals/NewArrivals";
import Banners from "../../components/HomePageComponents/Banners/Banners";
import PopularCategories from "../../components/HomePageComponents/PopularCategories/PopularCategories";
import TrendingNow from "../../components/HomePageComponents/TrendingNow/TrendingNow";
import Sales from "../../components/HomePageComponents/Sales/Sales";
import CTAMobileApp from "../../components/HomePageComponents/CTAMobileApp/CTAMobileApp";
import Services from "../../components/HomePageComponents/Services/Services";
import Instagram from "../../components/HomePageComponents/Instagram/Instagram";
import Blog from "../../components/HomePageComponents/Blog/Blog";
import Brands from "../../components/HomePageComponents/Brands/Brands";

const HomePage: React.FC = () => {
  return (
    <section>
      <Intro />
      <TopCategories />
      <NewArrivals />
      <Banners />
      <PopularCategories />
      <TrendingNow />
      <Sales />
      <CTAMobileApp />
      <Services />
      <Instagram />
      <Blog />
      <Brands />
    </section>
  );
};

export default HomePage;
