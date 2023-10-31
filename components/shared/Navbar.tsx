/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { navLinks } from "@/constant/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className=" absolute z-50  w-full p-20 max-md:px-[4px] max-md:py-[20px] md:mt-[2px] md:p-[60px] md:px-[6px] ">
        <div className="mr-10 flex items-center justify-between  ">
          <Link
            href="/"
            className="relative ml-20 flex flex-row gap-5 align-baseline max-md:ml-10"
          >
            <Image
              src="/assets/logo.svg"
              priority={true}
              width={85}
              height={52}
              alt="logo"
              className="shrink-0 "
            />
          </Link>

          <MobileNav />

          <div className="min-w-[120px] justify-between gap-[10px] max-md:hidden">
            <ul className="mr-10 flex list-none flex-row items-start justify-end gap-5 text-center font-normal not-italic leading-[20px] max-md:mr-20 ">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className="font-newsflashbb cursor-pointer text-[30px] font-medium"
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
