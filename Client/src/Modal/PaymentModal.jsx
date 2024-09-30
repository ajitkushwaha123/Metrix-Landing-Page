import React, { useState } from "react";
import { paymentVerifyAnim, success, failed } from "../assets";
import { useNavigate } from "react-router";

const PaymentModal = ({ paymentStatus, description, orderId }) => {
  console.log("paymentStatus", paymentStatus);
  const navigate = useNavigate();

  const handleRetryPayment = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };
  return (
    <>
      {open ? (
        <div>
          <div
            id="popup-modal"
            tabIndex="-1"
            className="fixed inset-0 flex items-center justify-center overflow-y-auto shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/10"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-4 md:p-5 text-center">
                  {paymentStatus === "SUCCESS" ? (
                    <img src={success} alt="success" />
                  ) : paymentStatus === "FAILED" ? (
                    <img src={failed} alt="failed" />
                  ) : (
                    <img src={paymentVerifyAnim} alt="verify" />
                  )}
                  <h3 className="mb-5 mt-[20px] px-[20px] text-lg font-normal text-gray-500 dark:text-gray-400">
                    {description}
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className={`text-white ${
                      paymentStatus === "SUCCESS"
                        ? "bg-success hover:bg-green-800"
                        : "bg-danger hover:bg-red-800"
                    }  focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center`}
                  >
                    <a
                      href={`${
                        paymentStatus === "SUCCESS"
                          ? "https://kravy.magicscale.in/dashboard"
                          : "mailto:support@magicscale.in?subject=Payment%20Failed&body=Payment%20failed%20!%20%20We%20kindly%20request%20your%20assistance%20in%20resolving%20this%20matter%20at%20the%20earliest%20convenience.%0A%0AorderId%20%3A%20${orderId}"
                      }`}
                    >
                      {paymentStatus === "SUCCESS"
                        ? "Dashboard"
                        : "Contact Support"}
                    </a>
                  </button>
                  {paymentStatus === "SUCCESS" ? (
                    <button
                      onClick={(e) => {
                        navigate("/");
                      }}
                      data-modal-hide="popup-modal"
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-100 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Back To Home
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleRetryPayment(e);
                      }}
                      data-modal-hide="popup-modal"
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-100 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Retry !
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PaymentModal;
