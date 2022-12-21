import React from "react";
import {
  Calculate,
  Features,
  Hero,
  Newsletter,
  Stats,
  Trade,
  Why,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
    </>
  );
};

export default Home;
