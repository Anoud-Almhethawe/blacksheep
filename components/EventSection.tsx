/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

const EventCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(false);
  };
  return (
    <>
      <div
        className="relative mt-10 p-10 pl-0 max-xl:mt-20 max-xl:w-full max-xl:p-0  max-sm:px-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          priority={true}
          placeholder="blur"
          blurDataURL="https://image-component.nextjs.gallery/placeholder"
          src="../assets/home-img.svg"
          alt="home-img"
          width={387}
          height={290}
          className={`${
            isHovering ? "" : ""
          } rounded-[30px] object-cover max-xl:h-auto max-xl:w-auto  max-md:p-[8px]  `}
        />
        <div className=" scope absolute bottom-10 left-3 pl-5">
          <div className="scope z-50 ">
            <h1 className="scope font-newsflashbb text-primary-white text-[20px] font-normal not-italic leading-normal delay-1000 ease-linear  max-xl:text-[50px] max-md:bottom-9  max-md:text-[35px] max-sm:bottom-1  max-sm:text-[20px] md:text-[25px]">
              OLLIE DAZE THE BEACH GETAWAY
            </h1>
          </div>
          <div className={`${isHovering ? "visible" : "hidden"} scope pb-2 `}>
            <Button className="scope bg-primary-green font-newsflashbb text-primary-black hover:bg-primary-white h-[40px] w-[129px] rounded-none text-center text-[16px] font-normal not-italic leading-4 delay-75 ease-in max-xl:mt-3 max-xl:w-[150px] max-md:w-[200px]">
              VIEW EVENTS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const EventSection = () => {
  return (
    <>
      <div className=" relative mt-20 flex w-fit flex-wrap p-10 max-xl:w-full max-md:mt-10 max-md:p-0">
        <h1 className=" font-newsflashbb text-primary-black absolute left-10 mb-5 text-[36px] font-normal not-italic max-xl:left-5">
          EVENTS
        </h1>
        <EventCard />
        <EventCard />
        <h1
          className="font-newsflashbb text-primary-green absolute right-10 mb-3 pt-[14px] text-[24px]
         font-normal not-italic"
        >
          VIEW ALL
        </h1>
      </div>
    </>
  );
};

export default EventSection;
