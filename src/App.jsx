import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BrandCarousel from "./components/ClientCarousel";
import Review from "./components/Review";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Kravy - Where billing meets flavour</title>
        <meta
          name="description"
          content="Kravy, a MagicScale company, offers cutting-edge restaurant billing software that streamlines invoicing, inventory management, and payment processing. Transform your restaurant's efficiency and customer satisfaction with Kravy."
        />
        <meta
          name="keywords"
          content="restaurant billing software, cafe billing software, restaurant inventory management, cafe inventory management, restaurant invoicing, restaurant payment processing"
        />
      </Helmet>

      <Navbar />
      <Hero />
      <BrandCarousel />
      <Features />
      <Pricing />
      <Review />
      <ContactForm />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
