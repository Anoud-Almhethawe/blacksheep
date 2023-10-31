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
      <span className="w-[330px] text-center  font-newsflashbb text-6xl font-normal not-italic leading-[60px] text-primary-green max-sm:text-5xl">
        “ BE THE{" "}
        <span className="text-6xl font-normal not-italic text-primary-black max-sm:text-5xl">
          BLACK SHEEP{" "}
        </span>
        ”
      </span>
    </div>
  );
};

export default Besheep;
