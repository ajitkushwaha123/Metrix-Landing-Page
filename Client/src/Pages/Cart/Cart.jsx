import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import PriceFormatter from "../../helper/PriceFormatter";
import { useParams, useNavigate } from "react-router-dom";
import { getSubscriptionsBysubscriptionType } from "../../helper/helper";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [cartData, setCartData] = useState({}); // Initialize with default values if needed
  const [isLoading, setIsLoading] = useState(false);

  const { subscriptionType } = useParams();
  console.log("Subscription Type:", subscriptionType);

  const getSubsBySubscriptionType = async () => {
    setIsLoading(true);
    try {
      const subscriptionPromise =
        getSubscriptionsBysubscriptionType(subscriptionType);

      setCartData((prevData) => ({
        ...prevData,
        loading: true,
      }));

      const response = await subscriptionPromise;

      console.log("API Response:", response?.data);
      setCartData(response?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartDetails", JSON.stringify(cartData));
  } , [cartData])

  useEffect(() => {
    getSubsBySubscriptionType();
  }, [subscriptionType]);

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/checkout/" + subscriptionType);
  };

  const calculatePricePerMonth = (duration, price) => {
    if (duration === 365) {
      return price / 12;
    } else if (duration === 180) {
      return price / 6;
    } else {
      return 0;
    }
  };

  const renewAbleDate = (duration) => {
    const today = new Date();
    if (duration === 7) {
      return new Date(today.setDate(today.getDate() + 7)).toLocaleDateString(
        "en-US",
        options
      );
    } else if (duration === 180) {
      return new Date(today.setDate(today.getDate() + 180)).toLocaleDateString(
        "en-US",
        options
      );
    } else {
      return new Date(today.setDate(today.getDate() + 365)).toLocaleDateString(
        "en-US",
        options
      );
    }
  }

  return (
    <>
      <div className="w-full lg:h-screen font-poppins bg-secondary px-[20px] sm:px-[40px] lg:px-[100px] py-[50px]">
        <Toaster reverseOrder="false" position="top-center"></Toaster>
        <Offer />

        <p className="text-indigo-500 bg-[#EEF0FA] text-[32px] py-[28px] font-semibold">
          Your Cart
        </p>

        <div>
          <div className="w-full lg:flex justify-between items-start">
            <div className="bg-[#fff] mb-[20px] lg:mb-[0px] p-[28px] w-[100%] lg:w-[63.66%] rounded-xl">
              <h3 className="text-indigo-500 text-[22px] pb-[20px] font-semibold">
                {cartData?.name}
              </h3>
              <p className="border-[1px] border-slate-100"></p>

              <div className="lg:flex justify-between items-center">
                <input
                  className="outline-none my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-lg"
                  value={
                    cartData?.duration === 7
                      ? "7 Days"
                      : cartData?.duration === 180
                      ? "6 Months"
                      : "1 Year"
                  }
                  type="text"
                />

                <div className="flex justify-between lg:justify-end w-[100%] lg:w-[60%] items-center">
                  <p className="bg-[#008361] text-[13px] sm:text-[17px] px-[12px] py-[4px] sm:px-[20px] sm:py-[6px] rounded-xl font-semibold text-white">
                    Save <PriceFormatter price={cartData.price * 1.3} />
                  </p>

                  <div className="ml-[20px]">
                    <p className="text-indigo-500 font-medium text-[16px] lg:text-[18px]">
                      <PriceFormatter
                        price={calculatePricePerMonth(
                          cartData?.duration,
                          cartData?.price -
                            (cartData?.discountPercentage * cartData?.price) /
                              100 +
                            cartData?.price * (cartData?.taxPercentage / 100)
                        )}
                      />{" "}
                      /Month
                    </p>
                    <s className="text-black font-medium text-[11px] sm:text-[14px]">
                      <PriceFormatter
                        price={calculatePricePerMonth(
                          cartData?.duration,
                          cartData?.price
                        )}
                      />
                      /Month
                    </s>
                  </div>
                </div>
              </div>

              <p className="pb-[10px] pt-[10px] lg:pt-[0px] text-[14px]">
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
                    100
                  }
                />
                /month after {renewAbleDate(cartData?.duration)} days
              </p>
            </div>
            <div className="bg-white w-[100%] py-[20px] lg:w-[33.33%] rounded-xl px-[20px] lg:p-[28px]">
              <div>
                <p className="flex justify-between items-center">
                  <h3 className="font-semibold text-[20px] text-black">
                    Subtotal
                  </h3>
                  <h3 className="flex justify-center items-center">
                    <s>
                      <PriceFormatter price={2 * cartData?.price} />
                    </s>
                    <p className="text-black ml-[14px] font-semibold text-[20px]">
                      <PriceFormatter price={cartData?.price} />
                    </p>
                  </h3>
                </p>

                <h4 className="w-full flex justify-between items-center py-[13px]">
                  <p>
                    Plan Discount
                    <span className="text-[#008361] ml-[10px]">
                      -{cartData?.discountPercentage} %
                    </span>
                  </p>

                  <p className="text-[#008361]">
                    -{" "}
                    <PriceFormatter
                      price={
                        (cartData?.discountPercentage * cartData?.price) / 100
                      }
                    />
                  </p>
                </h4>

                <h4 className="w-full pt-[6px] flex justify-between items-center py-[13px]">
                  <p>
                    Additional Taxes
                    <span className="text-[#008361] mx-[10px]">
                      + {cartData?.taxPercentage} %
                    </span>
                  </p>

                  <p className="text-[#008361]">
                    +
                    <PriceFormatter
                      price={cartData?.price * (cartData?.taxPercentage / 100)}
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
      </div>
    </>
  );
};

export default Cart;

// const cartDetails = [
//   {
//     name: "Starter Plan",
//     duration: "7 Days",
//     price: "0",
//     originalPriceMonth: "0",
//     originalPrice: "0",
//     discount: "10",
//     total: "0",
//     discountPercentage: "0",
//     taxes: "0",
//     renewDate: new Date(
//       new Date().setDate(new Date().getDate() + 7)
//     ).toLocaleDateString("en-US", options),
//     premium: "free",
//     renewPricePerMonth: "0",
//   },
//   {
//     name: "Growth Plan",
//     duration: "6 Months",
//     price: "820",
//     originalPriceMonth: "2499",
//     originalPrice: "8000",
//     discount: "1080",
//     total: "6000",
//     taxes: "5",
//     renewDate: new Date(
//       new Date().setDate(new Date().getDate() + 180)
//     ).toLocaleDateString("en-US", options),
//     premium: "growth",
//     renewPricePerMonth: "50",
//   },
//   {
//     name: "Enterprise Plan",
//     duration: "24 Months",
//     price: "667",
//     originalPriceMonth: "1899",
//     originalPrice: "20000",
//     discount: "2000",
//     total: "10000",
//     discountPercentage: "20",
//     taxes: "2",
//     renewDate: new Date(
//       new Date().setDate(new Date().getDate() + 365)
//     ).toLocaleDateString("en-US", options),
//     premium: "enterprise",
//     renewPricePerMonth: "100",
//   },
// ];

// {
//   cartData?.map((cartDetails, index) => (
//     <div>
{
  /* {cartDetails.premium === subscriptionType && ( */
}

// </div>

// </div>
{
  /* )} */
}
// </div>
// ));
// }
