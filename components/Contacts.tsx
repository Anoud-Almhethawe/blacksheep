"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";

//
const Contacts = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const handlePlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef?.current;
    if (videoPlaying) {
      video?.pause();
    } else {
      video?.play();
    }
    setVideoPlaying(!videoPlaying);
  };
  return (
    <>
      <div className=" max-xl:text-center">
        <div className="relative mx-auto mb-10 h-[438px]  w-full  p-10 ">
          <video
            controls
            poster="/assets/poster.svg"
            ref={videoRef}
            width="100%"
            className="vid mb-10 rounded-[30px] bg-primary-joinbg object-cover"
          >
            <source src="/assets/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="center-div absolute" onClick={handlePlay}>
            {videoPlaying ? (
              <Image
                priority={true}
                placeholder="blur"
                blurDataURL="https://image-component.nextjs.gallery/placeholder"
                src="/assets/white_play.svg"
                alt="home-img"
                width={76}
                height={76}
                className="relative object-cover"
              />
            ) : (
              <Image
                priority={true}
                placeholder="blur"
                blurDataURL="https://image-component.nextjs.gallery/placeholder"
                src="/assets/green_play.svg"
                alt="home-img"
                width={76}
                height={76}
                className="relative object-cover "
              />
            )}
          </div>
        </div>

        <section className="flex items-center gap-10  px-10 py-24 max-xl:flex-col ">
          <div
            className="flex-1"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1 className="font-newsflashbb text-[128px] font-normal not-italic leading-10  tracking-[16.64px] text-primary-black max-sm:text-[80px] max-sm:leading-8 xs:text-[40px] sm:text-[90px]">
              CONTACT US
            </h1>
          </div>

          <div className="flex-1 max-xl:pt-10">
            <p className="text-base font-normal not-italic text-[16] text-black ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore.Lorem
            </p>
            <Button
              className=" mt-[24px] rounded-none bg-primary-black px-10 text-center font-newsflashbb text-[16px] font-normal not-italic leading-5
             text-primary-white hover:bg-primary-green hover:text-primary-black max-md:w-[150px] "
            >
              CONTACT US
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
