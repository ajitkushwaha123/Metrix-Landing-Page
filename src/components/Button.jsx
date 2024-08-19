import React from 'react';
import { FaShopLock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Button = ({ title , func, border , textSize , hoverColor , bgHover, bgColor , borderColor , hoverBorder , textColor , hoverText}) => {
  return (
    <div className='font-poppins'>
      <button
        onClick={func}
        className={`hover:bg-${bgHover} text-[${textSize}] sm:text-[15px] border-2 border-${borderColor} flex bg-${bgColor} border-2 border-${borderColor} hover:border-2 hover:border-${hoverBorder} text-${textColor} hover:text-${hoverText} font-medium font-poppins justify-center items-center sm:px-4 px-3 sm:py-2 py-2 rounded-md`}
      >
        <FaShopLock className='mr-[8px]' /> {title}
      </button>
    </div>
  );
};

export default Button;
