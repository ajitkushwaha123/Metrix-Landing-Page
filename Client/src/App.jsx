import "./App.css";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Checkout from "./Pages/Cart/Checkout";
import PaymentStatus from "./Pages/Cart/PaymentStatus";
import CheckInternet from "./Modal/CheckInternet";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);

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

      {/* {online ? "online" : "false"} */}

      <Navbar />

      <BrowserRouter>
        <div>{online ? null : <CheckInternet isOpen={true} />}</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/:subscriptionType" element={<Cart />} />
          <Route path="/checkout/:subscriptionType" element={<Checkout />} />
          <Route path="/payment-status/:orderId" element={<PaymentStatus />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Support />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
