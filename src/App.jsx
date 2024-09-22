import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart/Cart";

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

