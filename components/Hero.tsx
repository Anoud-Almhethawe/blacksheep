/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-auto max-w-[100%]">
        <Image
          src="/assets/home-img.svg"
          priority={true}
          alt="home-img"
          sizes="100vh"
          width={200}
          height={200}
          className="relative  h-[100vh] w-[100%] rounded-[30px] object-cover p-[40px] max-md:p-[10px]"
        />

        <div className="min-md:bottom-[10px] absolute bottom-[70px] left-[97px] flex-1  max-md:bottom-[20px] max-md:left-[45px] ">
          <div className="z-50 flex  ">
            <h1 className=" min-md:text-[40px] font-newsflashbb text-primary-white text-[45px] font-normal  leading-normal max-md:bottom-2 max-md:left-1 max-md:text-[44px] ">
              OLLIE DAZE THE BEACH GETAWAY
            </h1>
          </div>
          <Button className=" bg-primary-green font-newsflashbb text-primary-black hover:bg-primary-white mt-5 h-[40px] w-[129px] rounded-none text-center text-[16px] font-normal not-italic leading-4 max-md:mt-1 max-md:w-[100px]">
            SHOW EVENTS
          </Button>
        </div>
      </div>

      <div className="absolute left-0 top-60 z-50 hover:opacity-0 hover:delay-75 hover:ease-in-out max-md:hidden ">
        <a href="/">
          <Image
            src="/assets/poka-nobke.svg"
            alt="logo"
            width={200}
            height={250}
            className="m-0 "
          />
        </a>
      </div>

      <div className=" absolute right-0 top-80 z-50 hover:opacity-0 hover:delay-75 hover:ease-in-out max-md:hidden ">
        <a href="/">
          <Image
            src="/assets/poka-nobke2.png"
            alt="logo"
            width={350}
            height={250}
            className="m-0 "
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
