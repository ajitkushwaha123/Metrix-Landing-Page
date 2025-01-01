import React from "react";

const BlogCard = ({data}) => {
  return (
    <div className="bg-white font-poppins shadow-lg rounded-md p-3">
      <div>
        <img
          width={"100%"}
          height={"100%"}
          className="rounded-md "
          src={data?.image}
        />
      </div>
      <div>
        <h2 class="text-medium py-4 hover:text-indigo-800 font-semibold">
          <a
            class="line-clamp-2"
            data-text="9 Best Food Packaging Ideas for Restaurants in 2025"
            href={data?.link}
          >
            {data?.title}
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
          <p className="text-xs mx-2 text-gray-700">{data?.date}</p>
        </div>
        <a className="text-sm animate-pulse text-indigo-800" href={data?.link}>
          Read More...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
