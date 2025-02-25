
import { FOOTER_LINKS_LIST, FOOTER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer-bg bg-cover bg-no-repeat py-[60px] max-sm:pt-12">
      <div className="container max-w-[1140px] mx-auto flex flex-col">
        <Link href="/">
          <Image
            src="/assets/images/webp/nav-logo.webp"
            width={152}
            height={44.06}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 items-center flex-wrap gap-y-2 p-2.5 max-md:my-4 max-sm:my-3 my-[30px]">
          {FOOTER_LINKS_LIST.map((obj, index) => (
            <Link
              key={index}
              className="leading-custom-xl whitespace-nowrap max-md:text-sm font-semibold text-white hover:text-cyan transition-all duration-300 hover:scale-105"
              href={obj.link}
            >
              {obj.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-3 flex-col">
          {FOOTER_LIST.map((obj, index) => (
            <div key={index} className="flex flex-col gap-y-2.5">
              <p className="text-white leading-custom-xl font-semibold max-md:text-sm">
                {obj.title}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6">
                {obj.description}
              </p>
              <p className="text-white opacity-80 font-normal text-base leading-6">
                {obj.descriptionTwo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
