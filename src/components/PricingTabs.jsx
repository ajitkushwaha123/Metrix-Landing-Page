import React from "react";
import { Tabs, Tab , CardBody , Card } from "@nextui-org/react";
import { CiGrid41 } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
// import List from "./Pricing"


import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import PricingCard from "./PricingCard";

export default function PrincingTabs() {
  return (
    <div className="flex w-[100%] bg-transparent flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="quarterly"
          title={
            <div className="flex items-center space-x-2">
              <CiBookmarkCheck />
              <span>Quaterly</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="flex bg-pattern1 py-[20px] px-[12px] justify-center items-center">
                <PricingCard
                  type="Starter"
                  price="2000"
                  subscription="3 months"
                  description="Perfect plan to starting out , Ideal for small restaurants and cafes ."
                  buttonText="Choose Startrer Plan"
                >
                  <List>1 Outlet</List>
                  <List>Complete Access of CRM</List>
                  <List>3 Month access</List>
                  <List>Instant Customer support</List>
                  <List>Uploaded Products</List>
                  <List>Software training</List>
                </PricingCard>
                <PricingCard
                  type="Growth"
                  price="3000"
                  subscription="3 months"
                  description="Ideal for growing restaurants, manage multiple outlets and boost your sales."
                  buttonText="Choose Growth Plan"
                >
                  <List>3 Outlets</List>
                  <List>Complete Access of CRM</List>
                  <List>3 Month access</List>
                  <List>All Features of Starter Plan</List>
                  <List>Software training</List>
                  <List>Customized Reporting</List>
                </PricingCard>

                <PricingCard
                  type="Enterprise"
                  price="5000"
                  subscription="3 months"
                  description="For large restaurants and chains, manage all your outlets and analytics in one place."
                  buttonText="Choose Enterprise Plan"
                >
                  <List>10 Outlets</List>
                  <List>Complete Access of CRM</List>
                  <List>3 Month access</List>
                  <List>All Features of Buisness Plan</List>
                  <List>Customized Reporting</List>
                  <List>Dedicated Account Manager</List>
                </PricingCard>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="half-yearly"
          title={
            <div className="flex items-center space-x-2">
              <CiBoxList />
              <span>Half Yearly</span>
            </div>
          }
        />
        <Tab
          key="yearly"
          title={
            <div className="flex items-center space-x-2">
              <CiGrid41 />
              <span>Yearly</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}


const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};