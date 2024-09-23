import React , {useState} from "react";
import Offer from "./Offer";
import PriceFormatter from "../../helper/PriceFormatter";

const Cart = () => {

  const [showCoupon, setShowCoupon] = useState(false);

  return (
    <div className="w-full font-poppins bg-[#EEF0FA] px-[100px] py-[50px]">
      <Offer />

      <p className="text-indigo-500 bg-[#EEF0FA] text-[32px] py-[28px] font-semibold">
        Your Cart
      </p>

      <div className="w-full flex justify-between items-start">
        <div className="bg-[#fff] p-[28px] w-[63.66%] rounded-xl">
          <h3 className="text-indigo-500 text-[22px] pb-[20px] font-semibold">
            Starter Plan
          </h3>
          <p className="border-[1px] border-slate-100"></p>

          <div className="flex justify-between items-center">
            <input
              className="outline-none my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-md"
              value={"24 Months"}
              type="text"
            />

            <div className="flex justify-end w-[60%] items-center">
              <p className="bg-[#008361] px-[20px] py-[6px] rounded-xl font-semibold text-white">
                Save <PriceFormatter price={"42000"} />
              </p>

              <div className="ml-[20px]">
                <p className="text-indigo-500 font-medium text-[18px]">
                  <PriceFormatter price={"843"} /> /Month
                </p>
                <s className="text-black font-medium text-[14px]">
                  <PriceFormatter price={"2499"} /> /Month
                </s>
              </div>
            </div>
            <p></p>
          </div>

          <p className="pb-[10px] text-[14px]">
            Renews at ₹1,899.00/month on 23/09/2026. Cancel anytime!
          </p>
        </div>
        <div className="bg-white w-[33.33%] rounded-xl p-[28px] ">
          <p className="flex justify-between items-center">
            <h3 className="font-semibold text-[20px] text-black">Subtotal</h3>
            <h3 className="flex justify-center items-center">
              <s>₹62,376.00</s>
              <p className="text-black ml-[14px] font-semibold text-[20px]">
                ₹20,376.00
              </p>
            </h3>
          </p>

          <h4 className="w-full flex justify-between items-center py-[13px]">
            <p>
              Plan Discount <span className="text-[#008361]">-67%</span>
            </p>
            <p className="text-[#008361]">
              <PriceFormatter price={"-42000"} />
            </p>
          </h4>

          <div>
            <h4 onClick={() => setShowCoupon(true)} className="font-semibold cursor-pointer text-indigo-500 pt-[12px]">
              Have a Coupon ?
            </h4>

            {showCoupon ? <div className="flex items-center">
              <input
                className="outline-none my-[20px] h-[46px] px-[10px] font-medium border-[1px] border-black-300 rounded-md"
                type="text"
                placeholder="Coupon Code ?"
              />


              <button className="bg-indigo-500 mx-[15px] px-[20px] py-[7px] rounded-md font-medium text-[20px] text-white">Apply</button>
            </div> : null}
          </div>

          <button className="bg-indigo-500 mt-[12px] text-white w-[100%] flex justify-center items-center py-[10px] rounded-md text-[20px] font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
