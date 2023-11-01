/* eslint-disable tailwindcss/no-custom-classname */
import { newFooterLinks, socialMedia } from "@/constant/page";
import Image from "next/image";
import React from "react";

const Newfotter = () => {
  return (
    <footer className=" footer4 bottom-[-5px] rounded-t-[30px]">
      <a href="/" className="">
        <Image
          src="/assets/white-logo.png"
          alt="logo"
          width={85}
          height={52}
          className="brand m-0"
        />
      </a>
      <div className=" container">
        <div className=" menu ">
          {newFooterLinks.map(section => (
            <div key={section.title} className="menu">
              <h4 className="font-newsflashbb text-primary-green  hover:text-primary-white text-l  cursor-pointer  font-medium leading-normal xl:text-xl 2xl:text-2xl">
                {section.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className=" text-bg-primary-white text-[10px] ">Follow us</div>
        {socialMedia.map(icon => (
          <div className="media-icons menue align-middle" key={icon.alt}>
            <Image
              src={`/assets/${icon.src}.svg`}
              alt={`${icon.alt}`}
              width={20}
              height={20}
              className="object-cover"
            />
          </div>
        ))}
        <div className="font-proximanova mt-1 cursor-pointer text-[15px] text-white">
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Newfotter;
