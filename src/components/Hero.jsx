import React from 'react'
import { FaShopLock } from "react-icons/fa6";
import { bg, stats } from '../assets';


const Hero = () => {

  const handleClickLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://kravy.magicscale.in/login";
  };

  const handleClickRegister = (e) => {
    e.preventDefault();
    window.location.href = "https://kravy.magicscale.in/register";
  };

  return (
    <>
      <div className="bg-pattern1 font-poppins sm:bg-mainBg bg-pattern2 px-[12px] sm:px-[50px] md:px-[100px] w-full font-poppins w-[100%] mt-[-90px]">
        <div
          id="home"
          className="w-[100%] flex justify-center items-center pt-[150px]"
        >
          <div className="flex lg:w-[70%] flex-col justify-center items-center">
            <p className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-center font-bold">
              The <span className="text-primary">Powerful</span> tools for your{" "}
              <span className="text-primary">Restaurant</span> business
            </p>

            <p className="mt-[30px] text-[16px] px-[20px] sm:text-[26px] text-center font-semibold text-slate-400">
              Track, Analyze your Business with Kravy - MagicScale
            </p>

            <div className="flex py-[40px] items-center">
              <div className="font-poppins">
                <button
                  onClick={(e) => {
                    handleClickLogin(e);
                  }}
                  className="hover:bg-white text-white sm:text-[20px] border-2 border-white flex bg-primary border-2 border-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center items-center sm:px-6 px-[10px] sm:px-5 py-2 sm:py-3 rounded-lg"
                >
                  <FaShopLock className="mr-[8px]" /> Login
                </button>
              </div>

              <div className="font-poppins ml-[20px] sm:ml-[40px]">
                <button
                  onClick={(e) => {
                    handleClickRegister(e);
                  }}
                  className="hover:bg-primary text-primary sm:text-[20px] border-2 border-[#5570F1] flex bg-white hover:border-2 hover:border-white text-primary hover:text-white font-medium font-poppins justify-center items-center sm:px-6 px-5 sm:py-3 py-2 rounded-lg"
                >
                  <FaShopLock className="mr-[8px]" /> Register
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] bg-pattern2 pb-[40px] md:pb-[0px] md:px-[50px]">
          <img className="" src={stats} />
        </div>

        {/* <div className="w-[50%]">
          <div className="flex justify-center items-center">
            <div className="mt-[-50px]">
              <BarChartComponent />
            </div>
            <div className="mt-[150px]">
              <LineChartComponent />
            </div>
          </div>

          <div className="absolute bottom-[-6%] left-[42%]">
            <CircularChart />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Hero
