import React from "react";
import { CiHome, CiGrid41, CiUser, CiMail } from "react-icons/ci";
import {
  FaQuestionCircle,
  FaRegUser,
  FaRegBuilding,
  FaCheck,
} from "react-icons/fa";
import { MdOutlinePriceChange, MdPhoneIphone } from "react-icons/md";
import {
  TbBrandAppgallery,
  TbBuildingEstate,
  TbBuildingStore,
} from "react-icons/tb";
import { IoIosBarcode } from "react-icons/io";
import { FaQrcode } from "react-icons/fa6";

const Icons = {
  CiHome,
  CiGrid41,
  CiUser,
  CiMail,
  FaQuestionCircle,
  FaRegUser,
  FaRegBuilding,
  MdOutlinePriceChange,
  MdPhoneIphone,
  TbBrandAppgallery,
  TbBuildingEstate,
  TbBuildingStore,
  IoIosBarcode,
  FaCheck,
  FaQrcode,
};

const Icon = ({ name }) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent className="" /> : null;
};

export default Icon;
