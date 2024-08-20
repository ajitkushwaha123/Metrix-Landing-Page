import React from "react";
import { Tabs, Tab , CardBody , Card } from "@nextui-org/react";
import { CiGrid41 } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import Button from "./Button";

import { CiBoxList } from "react-icons/ci";
import Title from "./Title";
import { stats } from "../assets";

export default function Features() {
  return (
    <div className="flex bg-pattern2 w-full flex py-[50px] items-center flex-col">
      <Title preTitle={"Our"} title={"Features"} />
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
          <div className="flex lg:px-[80px] flex-col  lg:flex-row justify-center font-poppins py-[60px] items-center z-10 bg-pattern1 w-[100%] rounded-xl">
            <div className="w-[100%] px-[20px] lg:w-[50%]">
              <img src={stats} />
            </div>

            <div className="w-[100%] items-center md:px-[40px] lg:items-start text-center lg:text-start lg:w-[50%] px-[20px] lg:px-[40px]">
              <h3 className="text-[25px] px-[25px] lg:px-[0px] mt-[50px] lg:mt-[0px] lg:text-[30px] font-medium">
                Solutions that will make your business successful
              </h3>
              <ul className="text-slate-400">
                <li className="mt-[25px]">
                  Tempor sapien quaerat ociis laoreet ipsum purus and sapien
                  dolor ultrice semper undo aliquam congue purus and pretium
                </li>
                <li className="mt-[15px]">
                  Cursus purus suscipit vitae egestas augue volute placerat undo
                  vitae ultrice sapien
                </li>

                <div className="mt-[20px] w-[100%] flex lg:justify-start justify-center items-center text-center">
                  <Button
                    hoverColor={"white"}
                    bgColor={"primary"}
                    borderColor={"white"}
                    textColor={"white"}
                    hoverText={"primary"}
                    bgHover={"white"}
                    hoverBorder={"primary"}
                    title={"More Info"}
                  />
                </div>
              </ul>
            </div>
          </div>
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
