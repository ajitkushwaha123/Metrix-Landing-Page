import React from "react";
import CountdownTimer from "./CountdownTimer";

const Offer = () => {
  return (
    <div className="bg-primary flex text-center md:text-start justify-center w-full font-poppins text-white rounded-md md:h-[120px]">
      <div className="px-[20px] w-full md:flex  justify-center items-center text-white font-normal">
        <div className="w-[100%] md:w-[50%] py-[20px] flex flex-col justify-center">
          <p className="text-[22px] font-medium">🔥 Limited-time deal:</p>
          <p className="mt-[9px] md:pr-[20px]">
            Don’t miss big discounts + 2 extra months FREE with a 48 month plan
          </p>
        </div>
        <div className="w-[100%] pb-[12px] md:w-[50%]">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Offer;
