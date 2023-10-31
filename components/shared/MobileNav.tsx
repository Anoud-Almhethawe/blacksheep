/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/constant/page";
import Link from "next/link";
import Image from "next/image";
const NavContent = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-6 pt-16 ">
        {navLinks.map(item => {
          return (
            <>
              <SheetClose asChild key={item.id}>
                <Link
                  href={item.id}
                  className=" hover:text-primary-white flex items-center justify-start gap-2 bg-transparent p-4"
                >
                  <p className="font-proximanova ">{item.title}</p>
                </Link>
              </SheetClose>
              <div className="absolute bottom-0 right-1 z-50 flex flex-col items-start ">
                <a href="/">
                  <Image
                    src="/assets/pekapoo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="m-0 "
                  />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden  ">
          <Image
            src="/assets/hamburger.svg"
            width={40}
            height={40}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-primary-green w-[200px] border-none"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/logo.svg"
              priority={true}
              alt="sitelogo"
              width={85}
              height={52}
            />
          </Link>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
