import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault(); 

    const user = {
      name,
      phone,
      email,
      country,
      state,
    };
  };

  return (
    <div
      id="contact-us"
      className="w-full flex flex-col py-[50px] md:py-[100px] justify-center items-center px-[15px] sm:px-[100px] bg-pattern2 "
    >
      <Title preTitle={"Book"} title={"Free Demo"} />
      <form
        onSubmit={submitHandler}
        className="md:min-w-[60%] max-w-[480px] pb-[40px] shadow-lg rounded-lg shadow-indigo-500/40"
      >
        <div className="mt-4 grid rounded-lg px-[30px] py-[40px] grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div className="col-span-2">
            <label className="font-medium">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="font-medium">Phone</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="font-medium">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="font-medium">City</label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="font-medium">Restourant Name</label>
            <input
              onChange={(e) => setState(e.target.value)}
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <Button
            className="text-center items-center"
            // func={"sumbitHandler"}
            title={"Book Demo"}
            hoverColor={"white"}
            bgColor={"primary"}
            borderColor={"white"}
            textColor={"white"}
            hoverText={"primary"}
            bgHover={"white"}
            hoverBorder={"primary"}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
