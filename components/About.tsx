/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "150%"]);

  return (
    <>
      <div className="flex items-center justify-between px-10 max-xl:flex-col-reverse max-xl:text-center  max-md:p-[8px]">
        <div className="pt-5 align-baseline">
          <h1 className="font-newsflashbb text-primary-black text-[36px] font-normal not-italic max-sm:text-[25]">
            WHO WE ARE
          </h1>
          <p
            className="min-md:text-[25px] min-sm:text-[10px] font-proximanova  text-primary-black  mt-[34px]
          px-10 text-[20px] font-normal leading-normal max-md:p-[8px] xl:w-[60%] "
          >
            Ollie Daze is not just a brand; it`&apos;`s a realm beyond the
            ordinary, where extraordinary living becomes a way of life. Here,
            judgment is left behind, <br></br>and free-spirited souls unite to
            embrace the wonders of life.
            <br /> <br /> OLLIE: A term used in all sports defining the action
            of jumping.
            <br /> DAZE: The act of being stunned from happiness.
          </p>
          <Button
            className=" bg-primary-black font-newsflashbb text-primary-white hover:bg-primary-green hover:text-primary-black mt-[20px] h-[40px] w-[129px] 
          rounded-none text-center text-[16px] font-normal not-italic leading-4 max-md:w-[200px] "
          >
            Learn MOre
          </Button>
        </div>
        <motion.div
          ref={targetRef}
          style={{ y: imgY, x: "-50%" }}
          className=" translate-y-[50%] max-xl:hidden max-lg:hidden  "
        >
          <a href="/">
            <Image
              src="/assets/pekapoo.png"
              alt="logo"
              width={300}
              height={300}
              className="m-0"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default About;
