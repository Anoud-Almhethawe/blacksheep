/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Besheep = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div
      className=" m-[40px] text-center "
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in"
    >
      <span className="font-newsflashbb text-primary-green  w-[330px] text-center text-6xl font-normal not-italic leading-[60px] max-sm:text-3xl">
        “ BE THE{" "}
        <span className="text-primary-black text-6xl font-normal not-italic  max-sm:text-3xl">
          BLACK SHEEP{" "}
        </span>
        ”
      </span>
    </div>
  );
};

export default Besheep;
