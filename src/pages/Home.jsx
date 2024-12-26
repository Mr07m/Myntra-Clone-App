import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Banner url="/images/banner.jpg" />
      <Card />
      <Banner url="/images/men-banner/cart-banner.png"/>
    </>
  );
};

export default Home;
