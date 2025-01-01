import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../components/Title";
import { getBlogData } from "../../helper/helper";
import BlogCard from "./BlogCard";


const BlogsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    // autoplay: true,
    autoplaySpeed: 500,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="z-100 fix py-[30px] h-auto justify-enter items-center flex-row cursor-pinter outline-none border-none">
      <div className="container-fluid">
        <div className="tp-brand-4-active relative z-1">
          <Slider {...settings}>
            {blogData.map((blog, index) => (
              <div key={index} className="px-5">
                <BlogCard key={index} data={blog} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogsCarousel;
