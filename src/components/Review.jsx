import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Title from "./Title";
import Button from "./Button";

const Review = () => {
  const testimonials = [
    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjWdiqLds-TdHl8_IltN1R1NAkPV2ruWgJ-q2Ib7GFn_J_mavalzHw=s64-c-rp-mo-ba2-br100",
      title: "Ambuj Sharma",
      designation: "Professional Plan~",
      review:
        "Kravy ne hume apne inventory management ko optimize karne mein bahut madad ki hai, ab hume kabhi stockouts ka samna nahi karna padta",
    },
    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjWXTAq088nCnDe2NDDV-2aYi4AWFUDh5jT-PRZwWEWrOvSePZUM5Q=s64-c-rp-mo-br100",
      title: "V Shashank",
      designation: "Starter Plan",
      review:
        "this software has been a game-changer for our restaurant! The analytics and sales tracking features have helped us increase our revenue by 20%",
    },

    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjXfTasUMn1X7Qq0v-na3akIRjk7GwAh5oiRJ-rF2c3Ux9hxt1cm=s64-c-rp-mo-br100",
      title: "Yuvraj Prakash",
      designation: "Professional Plan",
      review:
        "Kravy customer support team is very responsive and helpful. They helped us resolve an issue within minutes!",
    },

    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjXgtOUx8BecYSBcOpnAydef8lYuVvqRoD-FXMMlnhDGNgxcNEKA=s64-c-rp-mo-br100",
      title: "Shobha Yadav",
      designation: "Buisness Plan",
      review:
        " very user-friendly and customizable. We've been able to tailor it to our specific needs , and now it is used daily into our restourants.",
    },

    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjUR7ugHwsrlxcrn5e85YdzWpmlpabCwJ6UXBqOfnaBgjKLABMJF=s64-c-rp-mo-br100",
      title: "SAHIL GaMinG",
      designation: "Starter",
      review:
        "Kravy has saved us so much time and reduced errors. Highly recommend.",
    },

    {
      imgSrc:
        "https://lh3.googleusercontent.com/a/ACg8ocJ3txaxojeg_rpiFqN_0sH7uQZWTyMGTkjLYjGFu4_U_iaOSKiK=s64-c-rp-mo-ba2-br100",
      title: "Prati V",
      designation: "Professional Plan",
      review:
        "The integration with our existing systems was smooth and seamless. Great Job",
    },

    {
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjVCKob18zoOwXEJ5EUSjUVAIExROGyOX3AhAAYydQaont3jwInm=s64-c-rp-mo-ba4-br100",
      title: "Naman Rathore",
      designation: "Buisness Plan",
      review:
        "Kravy software bahut accha hai! Billing aur sales tracking mein bahut madad karta hai",
    },

    // Add more testimonials as needed
  ];

  return (
    <div id="our-customers" className="pt-[50px] px-[15px] bg-pattern1 overflow-x-hidden md:pt-[50px]">
      <Title preTitle="Our" title="Customers" />

      <div className="py-[40px] md:py-[80px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={
            window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4
          }
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mx-[15px] -z-10">
              <div className="w-full max-w-sm -z-10 flex justify-center items-center flex-shrink-0">
                <div className="p-6 bg-white rounded-4xl min-h-[250px] shadow-lg">
                  <div className="flex mb-6 items-center">
                    <img
                      className="block w-15 h-15 rounded-full"
                      src={testimonial.imgSrc}
                      alt={testimonial.title}
                    />
                    <div className="ml-5">
                      <span className="block text-xl font-semibold leading-none">
                        {testimonial.title}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-900 text-[16px] mb-6">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="block mr-1.5"
                      src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                      alt=""
                      data-config-id="auto-img-22-3"
                    />
                    <img
                      className="block mr-1.5"
                      src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                      alt=""
                      data-config-id="auto-img-23-3"
                    />
                    <img
                      className="block mr-1.5"
                      src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                      alt=""
                      data-config-id="auto-img-24-3"
                    />
                    <img
                      className="block mr-1.5"
                      src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                      alt=""
                      data-config-id="auto-img-25-3"
                    />
                    <img
                      className="block mr-1.5"
                      src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                      alt=""
                      data-config-id="auto-img-26-3"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          target="_blank"
          href="https://www.google.com/search?q=pizza+9&sca_esv=991ca55629cb7d36&sca_upv=1&sxsrf=ADLYWIJawqPXysUKNMbXfQQ0bpmahyDxDA%3A1715700502747&ei=FoNDZq2ULdn3seMPz8yV8Ak&ved=0ahUKEwit94a4uo2GAxXZe2wGHU9mBZ4Q4dUDCBA&uact=5&oq=pizza+9&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3BpenphIDkyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAkhKUABYAHABeAGQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgiYAwCIBgGQBhK6BgYIARABGAm6BgYIAhABGAiSBwExoAcA&sclient=gws-wiz-serp&lqi=CgdwaXp6YSA5IgOIAQFInNSQ3I25gIAIWhkQABABGAAYASIHcGl6emEgOSoGCAIQABABkgEKcmVzdGF1cmFudKoBPBABKgsiB3BpenphIDkoADIeEAEiGg0MiP2ZdX1q265b377HjhFa_Xz71bAll1W5MgsQAiIHcGl6emEgOQ#lkt=LocalPoiReviews&rlimm=12997184429820642054"
          className="flex justify-center items-center pt-[60px]"
        >
          {/* <Button
            title={"More Reviews"}
            hoverColor={"white"}
            bgColor={"primary"}
            borderColor={"white"}
            textColor={"white"}
            hoverText={"primary"}
            bgHover={"white"}
            hoverBorder={"primary"}
          /> */}
        </a>
      </div>
    </div>
  );
};

export default Review;
