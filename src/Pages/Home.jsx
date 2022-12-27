import React from "react";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutUs from "./AboutUs";
import Features from "./Features";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Features />
      <LatestNews />
      <Testimonials/>
    </div>
  );
};

export default Home;
