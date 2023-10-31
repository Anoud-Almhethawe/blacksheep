import { footerLinks, socialMedia } from "@/constant/page";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bottom-[-1px] mt-20 rounded-[30px] rounded-b-none bg-black p-5 pt-10 ">
      <div className=" flex w-[100%] items-center justify-between ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <Image
              src="/assets/white-logo.png"
              alt="logo"
              width={85}
              height={52}
              className="m-0 "
            />
          </a>
          <div className="  mt-[20px] flex items-center justify-end gap-3 max-md:mt-10 ">
            <div className="font-roboto text-[14px] text-primary-white">
              Follow us
            </div>
            {socialMedia.map(icon => (
              <div
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white"
                key={icon.alt}
              >
                <Image
                  src={`/assets/${icon.src}.svg`}
                  alt={`${icon.alt}`}
                  width={15}
                  height={15}
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-wrap justify-between  max-xl:pl-0 ">
          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className="mb-3  cursor-pointer px-5 font-newsflashbb text-2xl font-medium leading-normal text-primary-green hover:text-primary-white">
                {section.title}
              </h4>
              {section.links.map(link => (
                <h4
                  className="cursor-pointer gap-24 px-5 font-newsflashbb text-2xl leading-normal text-primary-green hover:text-primary-white"
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </h4>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-between text-white max-sm:flex-col max-sm:items-center">
        <div className="mt-1 flex flex-1 cursor-pointer items-center justify-start gap-2 font-proximanova text-sm">
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
