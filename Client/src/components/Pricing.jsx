import React from "react";
import Title from "./Title";
import PriceFormatter from "../helper/PriceFormatter";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative bg-pattern2 px-[20px] sm:px-[50px] md:px-[100px] overflow-hidden bg-white pb-12 pt-[40px] dark:bg-dark lg:pb-[90px] lg:pt-[70px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full justify-center flex flex-col items-center px-4">
            <div className="mx-auto px-[15px] mb-[30px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                <Title preTitle={"Our"} title={"Pricing Plans"} />
              </h2>
              <p className="text-base text-center text-body-color dark:text-dark-6">
                Choose from our wide ranges of plans and to get hassle-free
                access of our user friendly and affordable software .
              </p>
            </div>

            {/* <div className="flex mb-[40px] justify-center items-center">
              <PrincingTabs />
            </div> */}
          </div>
        </div>

        <div className="-mx-2 flex  flex-wrap justify-center">
          <div className="-mx-2 flex flex-wrap">
            <PricingCard
              type="7 Days Trial"
              price="Free"
              subscription="7 Days"
              description="Perfect plan to starting out , to test and understand the features of kravy ."
              buttonText="Choose Trial Plan"
              paymentlink="https://payments.cashfree.com/forms/kravy"
              plan={"free"}
            >
              <List>1 Outlet</List>
              <List>Complete Access of CRM</List>
              <List>7 Days Trial</List>
              <List>Instant Customer support</List>
              <List>Uploaded Products</List>
              <List>Software training</List>
              <List>Customized Reporting</List>
              <List>Free Zomato swiggy account handling</List>
              <List>Free Kravy Account Setup</List>
            </PricingCard>
            <PricingCard
              active
              type="Growth"
              price="5000"
              subscription="6 months"
              description="Ideal for growing restaurants, manage multiple outlets and boost your sales."
              buttonText="Choose Growth Plan"
              plan={"growth"}
            >
              <List>1 Outlet</List>
              <List>Complete Access of CRM</List>
              <List>6 Months </List>
              <List>Instant Customer support</List>
              <List>Uploaded Products</List>
              <List>Software training</List>
              <List>Customized Reporting</List>
              <List>Free Zomato swiggy account handling</List>
              <List>Free Kravy Account Setup</List>
            </PricingCard>

            <PricingCard
              type="Enterprise"
              price="8000"
              subscription="1 Year"
              description="For large restaurants and chains, manage all your outlets and analytics in one place."
              buttonText="Choose Enterprise Plan"
              plan={"enterprise"}
            >
              <List>1 Outlet</List>
              <List>Complete Access of CRM</List>
              <List>1 Year</List>
              <List>Instant Customer support</List>
              <List>Uploaded Products</List>
              <List>Software training</List>
              <List>Customized Reporting</List>
              <List>Free Zomato swiggy account handling</List>
              <List>Free Kravy Account Setup</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  plan
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className={`${
          active ? "border-2 border-primary" : ""
        } relative z-10 mb-10 overflow-hidden rounded-2xl border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}
      >
        <span className="mb-3 block text-lg font-semibold text-primary">
          {type}
        </span>
        <h2 className="mb-5 text-[37px] font-bold text-dark dark:text-white">
          {price === "Free" ? price : <PriceFormatter price={price} />}
          <span className="text-base font-medium text-body-color dark:text-dark-6">
            / {subscription}
          </span>
        </h2>
        <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
          {description}
        </p>
        <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
        <NavLink to={`/cart/${plan}`}>
          {active ? (
            <Button
              hoverColor={"white"}
              bgColor={"primary"}
              borderColor={"white"}
              textColor={"white"}
              hoverText={"primary"}
              bgHover={"white"}
              hoverBorder={"primary"}
              title={buttonText}
            />
          ) : (
            <Button
              hoverColor={"white"}
              bgColor={"white"}
              borderColor={"primary"}
              textColor={"primary"}
              hoverText={"white"}
              bgHover={"primary"}
              hoverBorder={"white"}
              title={buttonText}
            />
          )}
        </NavLink>
        <div>
          <span className="absolute right-0 top-7 z-[-1]">
            <svg
              width={77}
              height={172}
              viewBox="0 0 77 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1={86}
                  y1={0}
                  x2={86}
                  y2={172}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.09" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-4 top-4 z-[-1]">
            <svg
              width={41}
              height={89}
              viewBox="0 0 41 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="38.9138"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 38.9138 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 38.9138 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 38.9138 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 38.9138 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 38.9138 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 38.9138 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 38.9138 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="1.42021"
                r="1.42021"
                transform="rotate(180 38.9138 1.42021)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 26.4157 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 26.4157 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 26.4157 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 26.4157 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 26.4157 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 26.4157 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 26.4157 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="1.4202"
                r="1.42021"
                transform="rotate(180 26.4157 1.4202)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 13.9177 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 13.9177 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 13.9177 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 13.9177 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 13.9177 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 13.9177 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 13.9177 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="1.42019"
                r="1.42021"
                transform="rotate(180 13.9177 1.42019)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 1.41963 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 1.41963 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 1.41963 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 1.41963 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 1.41963 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 1.41963 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 1.41963 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="1.4202"
                r="1.42021"
                transform="rotate(180 1.41963 1.4202)"
                fill="#3056D3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
