import React from "react";
import Hero from "../../components/Hero";
import BrandCarousel from "../../components/ClientCarousel";
import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import Review from "../../components/Review";
import ContactForm from "../../components/ContactForm";
import Faqs from "../../components/Faqs";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandCarousel />
      <Features />
      <Pricing />
      <Review />
      <ContactForm />
      <Faqs />
    </div>
  );
};

export default Home;
