import React from 'react'
import { FaShopLock } from "react-icons/fa6";
import BarChartComponent from "../Charts/BarCharts";
import { HiQuestionMarkCircle } from "react-icons/hi";
import LineChartComponent from "../Charts/LineCharts";
import CircularChart from '../Charts/CircularChart';
import { bg, stats } from '../assets';


const Hero = () => {
  return (
    <>
      <div className="bg-mainBg px-[100px] w-full font-poppins w-[100%] mt-[-90px]">
        <div className="w-[100%] flex justify-center items-center pt-[150px]">
          <div className="flex w-[60%] flex-col justify-center items-center">
            <p className="text-[3rem] text-center font-bold">
              The <span className="text-primary">Powerful</span> tools for your{" "}
              <span className="text-primary">Restaurant</span> business
            </p>

            <p className="mt-[30px] text-[26px] text-center font-semibold text-slate-400">
              Track, Analyze your Business with Kravy - MagicScale
            </p>

            <div className="flex py-[40px] items-center">
              <div className="font-poppins">
                <button className="hover:bg-white text-white sm:text-[20px] border-2 border-white flex bg-primary border-2 border-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center items-center sm:px-6 px-5 sm:py-3 py-3 rounded-lg">
                  <FaShopLock className="mr-[8px]" /> Get Started
                </button>
              </div>

              <div className="font-poppins ml-[40px]">
                <button className="hover:bg-primary text-primary sm:text-[20px] border-2 border-[#5570F1] flex bg-white hover:border-2 hover:border-white text-primary hover:text-white font-medium font-poppins justify-center items-center sm:px-6 px-5 sm:py-3 py-3 rounded-lg">
                  <FaShopLock className="mr-[8px]" /> Register For Free
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] px-[50px]">
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
