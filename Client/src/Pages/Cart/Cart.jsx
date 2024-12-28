import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import PriceFormatter from "../../helper/PriceFormatter";
import { useParams, useNavigate } from "react-router-dom";
import { getSubscriptionsBysubscriptionType } from "../../helper/helper";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const { subscriptionType } = useParams();

  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const options = { year: "numeric", month: "long", day: "numeric" };

  // Fetch subscription data based on subscription type
  const fetchSubscriptions = async () => {
    setIsLoading(true);
    try {
      const response = await getSubscriptionsBysubscriptionType(
        subscriptionType
      );
      console.log("API Response:", response?.data);
      setCartData(response?.data || {});
    } catch (err) {
      console.error("Error fetching subscription:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Save cart data to local storage whenever it updates
  useEffect(() => {
    if (Object.keys(cartData).length > 0) {
      localStorage.setItem("cartDetails", JSON.stringify(cartData));
    }
  }, [cartData]);

  // Fetch subscription data when subscriptionType changes
  useEffect(() => {
    fetchSubscriptions();
  }, [subscriptionType]);

  // Navigate to the checkout page
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/checkout/${subscriptionType}`);
  };

  // Calculate price per month based on duration
  const calculatePricePerMonth = (duration, price) => {
    if (!price || !duration) return 0;
    if (duration === 365) return price / 12;
    if (duration === 180) return price / 6;
    return 0;
  };

  // Determine the renewal date based on duration
  const renewalDate = (duration) => {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + duration));
    return futureDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full lg:h-screen font-poppins bg-secondary px-[20px] sm:px-[40px] lg:px-[100px] py-[50px]">
      <Toaster reverseOrder={false} position="top-center" />
      <Offer />

      <p className="text-indigo-500 bg-[#EEF0FA] text-[32px] py-[28px] font-semibold">
        Your Cart
      </p>

      <div className="w-full lg:flex justify-between items-start">
        {/* Cart Details Section */}
        <div className="bg-white mb-[20px] lg:mb-0 p-[28px] w-full lg:w-[63.66%] rounded-xl">
          <h3 className="text-indigo-500 text-[22px] pb-[20px] font-semibold">
            {cartData?.name || "No Subscription Selected"}
          </h3>
          <hr className="border-slate-100" />

          <div className="lg:flex justify-between items-center my-[20px]">
            <input
              className="outline-none h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-lg w-full lg:w-auto"
              value={
                cartData?.duration === 7
                  ? "7 Days"
                  : cartData?.duration === 180
                  ? "6 Months"
                  : cartData?.duration === 30
                  ? "1 Month"
                  : "1 Year"
              }
              readOnly
            />

            <div className="flex justify-between lg:justify-end items-center w-full lg:w-[60%]">
              <p className="bg-[#008361] text-[13px] sm:text-[17px] px-[12px] py-[4px] sm:px-[20px] sm:py-[6px] rounded-xl font-semibold text-white">
                Save <PriceFormatter price={cartData?.price * 1.3 || 0} />
              </p>
              <div className="ml-[20px]">
                <p className="text-indigo-500 font-medium text-[16px] lg:text-[18px]">
                  <PriceFormatter
                    price={
                      calculatePricePerMonth(
                        cartData?.duration,
                        cartData?.price -
                          (cartData?.discountPercentage * cartData?.price) /
                            100 +
                          cartData?.price * (cartData?.taxPercentage / 100)
                      ) === 0
                        ? cartData?.price
                        : calculatePricePerMonth(
                            cartData?.duration,
                            cartData?.price -
                              (cartData?.discountPercentage * cartData?.price) /
                                100 +
                              cartData?.price * (cartData?.taxPercentage / 100)
                          )
                    }
                  />
                  /Month
                </p>
                <s className="text-black font-medium text-[11px] sm:text-[14px]">
                  <PriceFormatter
                    price={
                      calculatePricePerMonth(
                        cartData?.duration,
                        cartData?.price
                      ) === 0
                        ? cartData?.price
                        : calculatePricePerMonth(
                            cartData?.duration,
                            cartData?.price
                          )
                    }
                  />
                  /Month
                </s>
              </div>
            </div>
          </div>

          <p className="text-[14px]">
            Renews at{" "}
            <PriceFormatter
              price={
                (calculatePricePerMonth(
                  cartData?.duration,
                  cartData?.price -
                    (cartData?.discountPercentage * cartData?.price) / 100 +
                    cartData?.price * (cartData?.taxPercentage / 100)
                ) *
                  (100 - cartData?.onRenewPercentageDiscount)) /
                100 || 0
              }
            />
            /month after {renewalDate(cartData?.duration)}.
          </p>
        </div>

        {/* Summary Section */}
        <div className="bg-white w-full py-[20px] lg:w-[33.33%] rounded-xl px-[20px] lg:p-[28px]">
          <div>
            <p className="flex justify-between items-center">
              <h3 className="font-semibold text-[20px]">Subtotal</h3>
              <h3 className="flex items-center">
                <s>
                  <PriceFormatter price={2 * cartData?.price || 0} />
                </s>
                <span className="ml-[14px] text-black font-semibold text-[20px]">
                  <PriceFormatter price={cartData?.price || 0} />
                </span>
              </h3>
            </p>

            <h4 className="flex justify-between items-center py-[13px]">
              <p>
                Plan Discount
                <span className="text-[#008361] ml-[10px]">
                  -{cartData?.discountPercentage || 0}%
                </span>
              </p>
              <p className="text-[#008361]">
                -
                <PriceFormatter
                  price={
                    (cartData?.discountPercentage * cartData?.price) / 100 || 0
                  }
                />
              </p>
            </h4>

            <h4 className="flex justify-between items-center py-[13px]">
              <p>
                Additional Taxes
                <span className="text-[#008361] ml-[10px]">
                  +{cartData?.taxPercentage || 0}%
                </span>
              </p>
              <p className="text-[#008361]">
                +
                <PriceFormatter
                  price={cartData?.price * (cartData?.taxPercentage / 100) || 0}
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

              {showCoupon && (
                <div className="flex w-full items-center">
                  <input
                    className="outline-none w-[70%] my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-lg"
                    type="text"
                    placeholder="Coupon Code?"
                  />
                  <button className="bg-indigo-500 w-[30%] ml-[15px] px-[20px] py-[7px] rounded-lg font-medium text-[20px] text-white">
                    Apply
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleClick}
              className="bg-indigo-500 font-semibold mt-[12px] text-white w-full flex justify-center items-center py-[10px] rounded-lg"
            >
              <span className="mr-[10px]">Pay</span>
              <PriceFormatter
                price={Math.max(
                  0,
                  cartData?.price -
                    (cartData?.discountPercentage * cartData?.price) / 100 +
                    cartData?.price * (cartData?.taxPercentage / 100)
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
