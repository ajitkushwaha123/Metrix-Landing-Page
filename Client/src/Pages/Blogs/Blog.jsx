import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useState } from "react";
import { getBlogData } from "../../helper/helper";
import Title from "../../components/Title";
import BlogsCarousel from "./BlogsCarousel";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await getBlogData();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" container bg-pattern2 pb-6 pt-12 bg-gray-50">
      <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
        <Title preTitle={"Our"} title={"Blogs"} />
      </h2>
      <BlogsCarousel />
    </div>
  );
};

export default Blog;
