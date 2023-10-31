import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Eyes from "./Eyes";

const Join = () => {
  return (
    <section
      className="my-20 flex items-center gap-10 bg-primary-joinbg px-10 py-24 max-xl:flex-col-reverse max-xl:text-center max-md:p-[8px]
    "
    >
      <div className="min-md:flex-row flex-1 flex-col" data-aos="fade-right">
        <h1 className="font-newsflashbb text-[36px] font-normal not-italic text-primary-black">
          THE BLACK SHEEP COMMUNITY JOIN OUR COMMUNITY OF LIKE-MINDED PEOPLE
        </h1>
        <p className=" min-md:text-[25px] mt-[34px] px-10 font-proximanova text-[20px] font-normal leading-normal text-primary-black xl:w-[60%]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore.Lorem
        </p>
        <Button className=" mt-[50px] h-[40px] w-[129px] rounded-none bg-primary-black text-center font-newsflashbb text-[16px] font-normal not-italic leading-4 text-primary-white hover:bg-primary-white hover:text-primary-black max-md:w-[200px] ">
          join now
        </Button>
      </div>

      <div className="relative max-md:hidden">
        <Image
          priority={true}
          placeholder="blur"
          blurDataURL="https://image-component.nextjs.gallery/placeholder"
          src="/assets/sheep-sheep.svg"
          alt="join-img"
          width={343}
          height={475}
          className="relative object-cover"
        />
        <Eyes />
      </div>
    </section>
  );
};

export default Join;
