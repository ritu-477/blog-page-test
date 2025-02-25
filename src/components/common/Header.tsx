"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../common/CustomButton";
import { HEADER_LIST } from "@/utils/helper";

interface HeaderItem {
  title: string;
  link: string;
}
const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(4);
  const activeHandler = (index: number) => {
    setActive(active === index ? null : index);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="px-5 pt-4 max-sm:py-3 shadow-header-shadow">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center w-full py-4 bg-white bg-opacity-10 rounded-full pr-10 pl-[88px] border border-white border-opacity-15 max-lg:pl-12">
        <Link href="#">
          <Image
            width={150.2}
            height={44.06}
            src="/assets/images/webp/nav-logo.webp"
            className="max-lg:w-28 max-sm:w-20 object-cover"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-6 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-40 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "max-lg:right-0 max-lg:bg-black" : "max-lg:-right-full"
          }`}
        >
          {HEADER_LIST.map((obj: HeaderItem, i) => (
            <div key={i} className=" cursor-pointer">
              <Link
                href={obj.link}
                onClick={() => {
                  {
                    setOpen(!open);
                  }
                  activeHandler(i);
                }}
                className={`cursor-pointer text-base leading-custom-sm duration-300 ease-linear opacity-70 ${
                  active === i
                    ? "text-light-green opacity-100 text-stroke"
                    : "text-white font-normal"
                }`}
              >
                {obj.title}
              </Link>
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center">
            <CustomButton
              title="Sign Up"
              customClass="lg:hidden shadow-none text-black bg-light-green px-[24.7px] py-3.5 border border-light-green hover:bg-light-green hover:text-black"
            />
            <CustomButton
              title="Login"
              customClass="lg:hidden text-black bg-light-green px-[24.7px] py-3.5 border border-light-green !text-black hover:text-lightGreen hover:bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <CustomButton
            title="Sign Up"
            customClass ="max-lg:hidden shadow-none text-light-green border border-light-green px-4 py-3.5 hover:bg-light-green hover:text-black"
          />
          <CustomButton
            title="Login"
            customClass ="max-lg:hidden text-black bg-light-green px-[24.7px] py-3.5 border border-light-green !text-black rounded-full hover:!text-light-green hover:bg-transparent"
          />
        </div>

        {/* Toggle button */}
        <div
          onClick={() => setOpen(!open)}
          className="z-50 flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;