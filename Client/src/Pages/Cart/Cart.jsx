import React, { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import Offer from "./Offer";
import PriceFormatter from "../../helper/PriceFormatter";
import { useParams } from "react-router-dom"; // Corrected import
import axios from "axios";

const Cart = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const [orderId, setOrderId] = useState();
  const options = { year: "numeric", month: "long", day: "numeric" };

  let cashfree;

  const { id: plan } = useParams(); // Destructured useParams
  console.log(plan);

  const cartDetails = [
    {
      name: "Starter Plan",
      duration: "7 Days",
      price: "0",
      originalPriceMonth: "0",
      originalPrice: "0",
      discount: "10",
      total: "0",
      discountPercentage: "0",
      taxes: "0",
      renewDate: new Date(
        new Date().setDate(new Date().getDate() + 7)
      ).toLocaleDateString("en-US", options),
      premium: "free",
      renewPricePerMonth: "0",
    },
    {
      name: "Growth Plan",
      duration: "6 Months",
      price: "820",
      originalPriceMonth: "2499",
      originalPrice: "8000",
      discount: "1080",
      total: "6000",
      taxes: "5",
      renewDate: new Date(
        new Date().setDate(new Date().getDate() + 180)
      ).toLocaleDateString("en-US", options),
      premium: "growth",
      renewPricePerMonth: "50",
    },
    {
      name: "Enterprise Plan",
      duration: "24 Months",
      price: "667",
      originalPriceMonth: "1899",
      originalPrice: "20000",
      discount: "2000",
      total: "10000",
      discountPercentage: "20",
      taxes: "2",
      renewDate: new Date(
        new Date().setDate(new Date().getDate() + 365)
      ).toLocaleDateString("en-US", options),
      premium: "enterprise",
      renewPricePerMonth: "100",
    },
  ];

  useEffect(() => {
    const initialiseSdk = async () => {
      try {
        cashfree = await load({
          mode: "sandbox", //or production
        });
        console.log("Cashfree SDK initialized");
      } catch (error) {
        console.error("Error initializing Cashfree SDK", error);
      }
    };

    initialiseSdk();
  }, []);

  const getSessionId = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/payment");
      console.log("Response:", res);

      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (err) {
      console.error("Error fetching session ID", err);
    }
  };

  const verifyPayment = async () => {
    try {
      let res = await axios.post("http://localhost:8000/api/payment/verify", {
        orderId: orderId,
      });

      if (res && res.data) {
        alert("Payment Successfull");
      }
    } catch (err) {
      console.error("Error verifying payment", err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const sessionId = await getSessionId();
      console.log("sess", sessionId);

      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((result) => {

        if (result.error) {
          // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
          console.log(
            "User has closed the popup or there is some payment error, Check for Payment Status"
          );
          console.log(result.error);
        }
        if (result.redirect) {
          // This will be true when the payment redirection page couldnt be opened in the same window
          // This is an exceptional case only when the page is opened inside an inAppBrowser
          // In this case the customer will be redirected to return url once payment is completed
          console.log("Payment will be redirected");
        }
        if (result.paymentDetails) {
          // This will be called whenever the payment is completed irrespective of transaction status
          console.log("Payment has been completed, Check for Payment Status");
          console.log(result.paymentDetails.paymentMessage);
        }
      });
      console.log(sessionId);
    } catch (err) {
      console.error("Error handling click", err);
    }
  };

  return (
    <div className="w-full lg:h-screen font-poppins bg-[#EEF0FA] px-[20px] sm:px-[40px] lg:px-[100px] py-[50px]">
      <Offer />

      <p className="text-indigo-500 bg-[#EEF0FA] text-[32px] py-[28px] font-semibold">
        Your Cart
      </p>

      {cartDetails.map((cartDetails, index) => (
        <div>
          {cartDetails.premium === plan && (
            <div className="w-full lg:flex justify-between items-start">
              <div className="bg-[#fff] mb-[20px] lg:mb-[0px] p-[28px] w-[100%] lg:w-[63.66%] rounded-xl">
                <h3 className="text-indigo-500 text-[22px] pb-[20px] font-semibold">
                  {cartDetails.name}
                </h3>
                <p className="border-[1px] border-slate-100"></p>

                <div className="lg:flex justify-between items-center">
                  <input
                    className="outline-none my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-lg"
                    value={cartDetails.duration}
                    type="text"
                  />

                  <div className="flex justify-between lg:justify-end w-[100%] lg:w-[60%] items-center">
                    <p className="bg-[#008361] text-[13px] sm:text-[17px] px-[12px] py-[4px] sm:px-[20px] sm:py-[6px] rounded-xl font-semibold text-white">
                      Save <PriceFormatter price={cartDetails.discount} />
                    </p>

                    <div className="ml-[20px]">
                      <p className="text-indigo-500 font-medium text-[16px] lg:text-[18px]">
                        <PriceFormatter price={cartDetails.price} /> /Month
                      </p>
                      <s className="text-black font-medium text-[11px] sm:text-[14px]">
                        <PriceFormatter
                          price={cartDetails.originalPriceMonth}
                        />
                        /Month
                      </s>
                    </div>
                  </div>
                </div>

                <p className="pb-[10px] pt-[10px] lg:pt-[0px] text-[14px]">
                  Renews at{" "}
                  <PriceFormatter
                    price={cartDetails.price - cartDetails.renewPricePerMonth}
                  />
                  /month after {cartDetails.renewDate}.
                </p>
              </div>
              <div className="bg-white w-[100%] py-[20px] lg:w-[33.33%] rounded-xl px-[20px] lg:p-[28px]">
                <p className="flex justify-between items-center">
                  <h3 className="font-semibold text-[20px] text-black">
                    Subtotal
                  </h3>
                  <h3 className="flex justify-center items-center">
                    <s>
                      <PriceFormatter price={cartDetails.originalPrice} />
                    </s>
                    <p className="text-black ml-[14px] font-semibold text-[20px]">
                      <PriceFormatter price={cartDetails.total} />
                    </p>
                  </h3>
                </p>

                <h4 className="w-full flex justify-between items-center py-[13px]">
                  <p>
                    Plan Discount
                    <span className="text-[#008361] ml-[10px]">
                      -
                      {cartDetails.total == 0
                        ? "0"
                        : (cartDetails.discount * 100) / cartDetails.total}{" "}
                      %
                    </span>
                  </p>

                  <p className="text-[#008361]">
                    - <PriceFormatter price={cartDetails.discount} />
                  </p>
                </h4>

                <h4 className="w-full pt-[6px] flex justify-between items-center py-[13px]">
                  <p>
                    Additional Taxes
                    <span className="text-[#008361] mx-[10px]">
                      + {cartDetails.taxes} %
                    </span>
                  </p>

                  <p className="text-[#008361]">
                    +
                    <PriceFormatter
                      price={Math.max(
                        0,
                        ((cartDetails.total - cartDetails.discount) *
                          cartDetails.taxes) /
                          100
                      )}
                    />
                  </p>
                </h4>

                <div>
                  <h4
                    onClick={() => setShowCoupon(true)}
                    className="font-semibold cursor-pointer text-indigo-500 pt-[12px]"
                  >
                    Have a Coupon?
                  </h4>

                  {showCoupon ? (
                    <div className="flex w-[full] justify-center items-center">
                      <input
                        className="outline-none w-[70%] my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-lg"
                        type="text"
                        placeholder="Coupon Code?"
                      />

                      <button className="bg-indigo-500 w-[30%] mx-[15px] px-[20px] py-[7px] rounded-lg font-medium text-[20px] text-white">
                        Apply
                      </button>
                    </div>
                  ) : null}
                </div>

                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-indigo-500 font-semibold mt-[12px] text-white w-[100%] flex justify-center items-center py-[10px] rounded-lg"
                >
                  <span className="mr-[10px]">Pay</span>
                  <PriceFormatter
                    price={Math.max(
                      0,
                      cartDetails.total -
                        coupon +
                        ((cartDetails.total - cartDetails.discount) *
                          cartDetails.taxes) /
                          100 -
                        cartDetails.discount
                    )}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
