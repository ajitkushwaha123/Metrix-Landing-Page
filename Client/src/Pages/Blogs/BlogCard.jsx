import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CircleCheckBig } from "lucide-react";

const BlogCard = ({ data }) => {
  return (
    <div className="bg-white font-poppins shadow-lg rounded-md p-3">
      <div className="w-full relative">
        {!data?.image ? (
          <Skeleton height={"160px"} />
        ) : (
          <img
            width={"100%"}
            height={"100%"}
            className="rounded-md "
            src={data?.image}
          />
        )}

        <div className="absolute h-[30px] flex justify-start items-center bottom-2 left-2 p-2 bg-white shadow-md rounded-md">
          <img
            width={"18px"}
            className="rounded-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjEoUHBc0eGG-ZlaEQmdFZBIGtbOdht7HJ24Ng-fyOfY9QnR8fhx8caopvZat9oIfR1JfLSDkhuefcK0VwUBjegr0GVvvZvnodIyAexqyx2EOa5VGO_l9UMfD1YRx0gysexhXMALePCX8BnVnambOBtzgirvX1AwZZHeSoqa8fFeHdTos/s220/WhatsApp%20Image%202023-08-07%20at%2010.28.42%20(1).jpeg"
          />
          <p className="text-sm ml-1.5 mr-2">{data?.author?.name}</p>
          <img width={"16px"} src="https://www.pngall.com/wp-content/uploads/8/Verification-Blue-Tick.png" />
        </div>
      </div>
      <div>
        <h2 class="text-medium py-4 hover:text-indigo-800 font-semibold">
          <a
            class="line-clamp-2"
            data-text="9 Best Food Packaging Ideas for Restaurants in 2025"
            href={data?.link}
          >
            {data?.title || <Skeleton count={2} />}
          </a>
        </h2>

        <div class="text-sm text-gray-500 line-clamp-2">
          {data?.description}
        </div>
      </div>

      <div class="flex justify-between items-center pt-3">
        <div className="flex justify-center items-center">
          <button className="bg-indigo-600 text-white rounded-sm text-xs px-2">
            Published
          </button>
          <p className="text-xs mx-2 text-gray-700">
            {data?.date || <Skeleton width={"100px"} height={"15px"} />}
          </p>
        </div>
        <a className="text-sm animate-pulse text-indigo-800" href={data?.link}>
          Read More...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
