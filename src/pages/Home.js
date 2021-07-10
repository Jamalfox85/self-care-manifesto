import React from "react";
import ChooseYourFocus from "../components/ChooseYourFocus";
import Email from "../components/Email";
import Focus from "../components/Focus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Postings from "../components/Postings";

function Home() {
  return (
    <>
      <Hero />
      <Postings />
      <ChooseYourFocus />
      <Focus />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
