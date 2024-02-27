import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Featured from "../components/FeaturedItem";

function HomePage() {
  return (
    <>
      <Navbar />
        <Header />
        <Featured />
      <Footer />
    </>
  );
}

export default HomePage;
