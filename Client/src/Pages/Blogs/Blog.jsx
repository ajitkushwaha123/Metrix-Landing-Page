import React, { useEffect } from "react";
import Title from "../../components/Title";
import BlogsCarousel from "./BlogsCarousel";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container bg-gray-50 w-full mt-[-13px] pt-12 bg-pattern2 pb-6">
      <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
        <Title preTitle={"Our"} title={"Blogs"} />
      </h2>
      <div className="w-[100%] flex flex-col">
        <BlogsCarousel />

        <div className="w-full flex justify-center items-center">
          <a href="https://blog.magicscale.in/" target="_blank">
            <button className="px-[20px] items-center font-poppins font-medium py-2 rounded-md bg-indigo-700 text-white">
              Read More... !
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
