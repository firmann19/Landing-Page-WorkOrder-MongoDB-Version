import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Featured from "../components/FeaturedItem";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="mx-md-auto">
        <Header />
        <Featured />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
