import React from "react";
import { Tabs, Tab , CardBody , Card } from "@nextui-org/react";
import { CiGrid41 } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import Button from "./Button";

import { CiBoxList } from "react-icons/ci";
import Title from "./Title";
import { customer, feature1, feature2, invoiceImg, stats , billing } from "../assets";
import { NavLink } from "react-router-dom";

export default function Features() {



  return (
    <div
      id="feature"
      className="flex bg-pattern2 w-full justify-center py-[50px] items-center flex-col"
    >
      <Title preTitle={"Our"} title={"Features"} />
      <Tabs
        aria-label="Options"
        className="w-[100%] chalaja flex justify-center items-center px-[15px] overflow-x-scroll"
        color="primary"
        variant="bordered"
      >
        <Tab
          key="sales-analytics"
          title={
            <div className="flex items-center space-x-2">
              <CiBookmarkCheck />
              <span>Sales Analytics</span>
            </div>
          }
        >
          <div className="flex lg:px-[80px] flex-col  lg:flex-row justify-center font-poppins py-[60px] items-center z-10 bg-pattern1 w-[100%] rounded-xl">
            <div className="w-[100%] px-[20px] lg:w-[50%]">
              <img alt="Smart-sales-insights-kravy" src={feature2} />
            </div>

            <div className="w-[100%] items-center md:px-[40px] lg:items-start text-center lg:text-start lg:w-[50%] px-[20px] lg:px-[40px]">
              <h3 className="text-[25px] px-[25px] lg:px-[0px] mt-[50px] lg:mt-[0px] lg:text-[30px] font-medium">
                Unlock Business Success With Our Smart Sales Insights"
              </h3>
              <ul className="text-slate-400">
                <li className="mt-[25px]">
                  Revenue Monitoring for maximum profits, Customer Insights for
                  personalized service,
                </li>
                <li className="mt-[15px]">
                  Real-Time Reporting for swift actions, Data Visualization for
                  clear understanding
                </li>

                <div className="mt-[20px] w-[100%] flex lg:justify-start justify-center items-center text-center">
                  <a href="https://blog.magicscale.in/2024/10/the-best-restaurant-pos-features.html#2._Precise_Sales_Analytics">
                    <Button
                      hoverColor={"white"}
                      bgColor={"primary"}
                      borderColor={"white"}
                      textColor={"white"}
                      hoverText={"primary"}
                      bgHover={"white"}
                      hoverBorder={"primary"}
                      title={"Explore Features"}
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab
          key="customer-management"
          title={
            <div className="flex items-center space-x-2">
              <CiBoxList />
              <span>Customer Management</span>
            </div>
          }
        >
          <div className="flex lg:px-[80px] flex-col  lg:flex-row justify-center font-poppins py-[60px] items-center z-10 bg-pattern1 w-[100%] rounded-xl">
            <div className="w-[100%] px-[20px] lg:w-[50%]">
              <img alt="customer-dashboard" src={customer} />
            </div>

            <div className="w-[100%] items-center md:px-[40px] lg:items-start text-center lg:text-start lg:w-[50%] px-[20px] lg:px-[40px]">
              <h3 className="text-[25px] px-[25px] lg:px-[0px] mt-[50px] lg:mt-[0px] lg:text-[30px] font-medium">
                Manage customer data to grow and scale your Buisness .
              </h3>
              <ul className="text-slate-400">
                <li className="mt-[25px]">
                  Customer Retention for long-term loyalty, Personalized
                  Marketing for increased sales, and Loyalty Programs for repeat
                  business
                </li>
                <li className="mt-[15px]">
                  Build Loyal Customers with Our Solutions: Profiling,
                  Segmentation, Retention, Personalized Marketing, and Loyalty
                  Programs"
                </li>

                <div className="mt-[20px] w-[100%] flex lg:justify-start justify-center items-center text-center">
                  <a href="https://blog.magicscale.in/2024/10/the-best-restaurant-pos-features.html#3._Seamless_Customer_and_Order_Management">
                    <Button
                      hoverColor={"white"}
                      bgColor={"primary"}
                      borderColor={"white"}
                      textColor={"white"}
                      hoverText={"primary"}
                      bgHover={"white"}
                      hoverBorder={"primary"}
                      title={"Explore Features"}
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab
          key="billing"
          title={
            <div className="flex items-center space-x-2">
              <CiGrid41 />
              <span>Billing</span>
            </div>
          }
        >
          <div className="flex lg:px-[80px] flex-col  lg:flex-row justify-center font-poppins py-[60px] items-center z-10 bg-pattern1 w-[100%] rounded-xl">
            <div className="w-[100%] px-[20px] lg:w-[50%]">
              <img alt="kravy-billing" src={billing} />
            </div>

            <div className="w-[100%] items-center md:px-[40px] lg:items-start text-center lg:text-start lg:w-[50%] px-[20px] lg:px-[40px]">
              <h3 className="text-[25px] px-[25px] lg:px-[0px] mt-[50px] lg:mt-[0px] lg:text-[30px] font-medium">
                We simplify billing for your business in just 3 Clicks .
              </h3>
              <ul className="text-slate-400">
                <li className="mt-[25px]">
                  you can focus on growing your business while we handle the
                  administrative tasks.
                </li>
                <li className="mt-[15px]">
                  Reduce billing headaches, increase efficiency, and watch your
                  business thrive!
                </li>

                <div className="mt-[20px] w-[100%] flex lg:justify-start justify-center items-center text-center">
                  <a href="https://blog.magicscale.in/2024/10/the-best-restaurant-pos-features.html#4._Errorless_Billing_Management:_">
                    <Button
                      hoverColor={"white"}
                      bgColor={"primary"}
                      borderColor={"white"}
                      textColor={"white"}
                      hoverText={"primary"}
                      bgHover={"white"}
                      hoverBorder={"primary"}
                      title={"Explore Features"}
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab
          key="invoice"
          title={
            <div className="flex items-center space-x-2">
              <CiGrid41 />
              <span>Invoice Generator</span>
            </div>
          }
        >
          <div className="flex lg:px-[80px] flex-col  lg:flex-row justify-center font-poppins py-[60px] items-center z-10 bg-pattern1 w-[100%] rounded-xl">
            <div className="w-[100%] px-[20px] lg:w-[50%]">
              <img alt="kravy-invoicing" src={invoiceImg} />
            </div>

            <div className="w-[100%] items-center md:px-[40px] lg:items-start text-center lg:text-start lg:w-[50%] px-[20px] lg:px-[40px]">
              <h3 className="text-[25px] px-[25px] lg:px-[0px] mt-[50px] lg:mt-[0px] lg:text-[30px] font-medium">
                Generate professional invoices and KOTs quickly and easily
              </h3>
              <ul className="text-slate-400">
                <li className="mt-[25px]">
                  with our intuitive interface and customizable templates . Save
                  time and reduce errors,
                </li>
                <li className="mt-[15px]">
                  designed specifically for restaurants and food service
                  businesses. Print or send KOTs to the kitchen, and generate
                  bill for customers
                </li>

                <div className="mt-[20px] w-[100%] flex lg:justify-start justify-center items-center text-center">
                  <a href="https://blog.magicscale.in/2024/10/the-best-restaurant-pos-features.html#5._Accurate_Invoice_Generator">
                    <Button
                      hoverColor={"white"}
                      bgColor={"primary"}
                      borderColor={"white"}
                      textColor={"white"}
                      hoverText={"primary"}
                      bgHover={"white"}
                      hoverBorder={"primary"}
                      title={"Explore Features"}
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
