import React, { useState, useEffect } from "react";
import PriceFormatter from "../../helper/PriceFormatter";
import { getSubscriptionsBysubscriptionType } from "../../helper/helper";
import { useParams } from "react-router";

const TotalCart = () => {
  const { subscriptionType } = useParams();

  const [cartData, setCartData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    getSubsBySubscriptionType();
  }, [subscriptionType]);

  const percentToAmount = (percent, amount) => {
    return (percent * amount) / 100;
  };

  const [showCoupon, setShowCoupon] = useState(false);
  return (
    <div className="w-full shadow-lg font-poppins p-[28px] rounded-xl bg-white">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3 className="font-semibold text-[20px]">Order Summary</h3>

          <p className="text-[22px] mt-[18px] font-semibold">
            {cartData?.name}
          </p>

          <div className="flex border-b-1 pb-[22px]  border-gray-slate-200 justify-between items-center">
            <p>
              {cartData?.duration === 365
                ? "12 Months"
                : cartData?.duration === 180
                ? "6 Months"
                : "7 Days"}{" "}
              plan
            </p>
            <p className="flex mt-[10px]">
              <del className="text-slate-500">
                <PriceFormatter price={2 * cartData?.price} />
              </del>
              <p className="ml-[10px]">
                <PriceFormatter price={cartData?.price} />
              </p>
            </p>
          </div>

          <div className="flex pt-[15px] justify-between items-center">
            <h3 className="font-semibold text-[20px]">Subtotal</h3>
            <p className="flex mt-[10px]">
              <del className="text-slate-500">
                <PriceFormatter
                  price={cartData?.price}
                />
              </del>
              <p className="ml-[10px]">
                <PriceFormatter
                  price={cartData?.price - percentToAmount(
                    cartData?.discountPercentage,
                    cartData?.price
                  )}
                />
              </p>
            </p>
          </div>

          <div className="flex mt-[10px] pb-[22px] justify-between items-center">
            <p>
              Plan Discount{" "}
              <span className="text-success">
                - {cartData?.discountPercentage} %
              </span>
            </p>
            <p className="mt-[10px]">
              <p className="ml-[10px] text-primary">
                -{" "}
                <PriceFormatter
                  price={percentToAmount(
                    cartData?.discountPercentage,
                    cartData?.price
                  )}
                />
              </p>
            </p>
          </div>

          <div className="border-b-1 pb-[22px]  border-gray-slate-200 justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <p className="py-[10px]">Taxes & Fees</p>
                <span className="text-danger ml-[11px]">
                  + {cartData?.taxPercentage} %
                </span>
              </div>
              <p className="text-primary">
                +{" "}
                <PriceFormatter
                  price={percentToAmount(
                    cartData?.taxPercentage,
                    cartData?.price
                  )}
                />
              </p>
            </div>
            <p className="text-slate-500">
              (Calculated after billing information)
            </p>
          </div>

          <div className="flex pt-[15px] justify-between items-center">
            <h3 className="font-semibold text-[20px]">Estimated total</h3>
            <p className="flex font-semibold text-[20px] mt-[10px]">
              <PriceFormatter
                price={
                  cartData?.price -
                  percentToAmount(
                    cartData?.discountPercentage,
                    cartData?.price
                  ) +
                  percentToAmount(cartData?.taxPercentage, cartData?.price)
                }
              />
            </p>
          </div>

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
        </div>
      )}
    </div>
  );
};

export default TotalCart;
