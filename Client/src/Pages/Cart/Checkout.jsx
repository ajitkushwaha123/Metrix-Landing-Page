import React from "react";
import CheckoutForm from "./CheckoutForm";
import TotalCart from "./TotalCart";
import { TiArrowBackOutline } from "react-icons/ti";
import { useParams , useNavigate } from "react-router-dom";

const Checkout = () => {

  const { subscriptionType } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="font-poppins py-[30px]  bg-secondary px-[100px] w-full">
      <button onClick={() => {navigate(`/cart/${subscriptionType}`)}} className="font-medium mb-[20px] flex justify-center items-center bg-primary px-[20px] py-2 text-white rounded-md">
        <TiArrowBackOutline /> <span className="ml-[10px]">Back</span>
      </button>
      <div className="w-full flex justify-center">
        <div className="w-[60%]">
          <CheckoutForm />
        </div>
        <div className="w-[40%] ml-[40px]">
          <TotalCart />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
