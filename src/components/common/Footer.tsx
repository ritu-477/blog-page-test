
import { FOOTER_LINKS_LIST, FOOTER_LIST,FOOTER_SOCIAL_LINKS } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer-bg bg-cover bg-no-repeat pt-[60px] max-sm:pt-12 relative max-w-[1920px] mx-auto">
       <Image
            src="/assets/images/webp/footer-ellipse.webp"
            width={375}
            height={375}
            alt="ellipse"
            className="absolute top-0 right-0 lg:block hidden"
          />
           <Image
            src="/assets/images/png/footer-vector.png"
            width={30.65}
            height={185.24}
            alt="ellipse"
            className="absolute top-0 right-[121px] w-[60px] h-[200px] lg:block hidden"
          />
           <Image
            src="/assets/images/png/footer-vector-two.png"
            width={30.65}
            height={143.84}
            alt="ellipse"
            className="absolute top-[92px] right-[60px] lg:block hidden"
          />
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
        <div className="flex items-center gap-6 lg:pt-[50px] lg:pb-[80px] pt-8 pb-12">
          {FOOTER_SOCIAL_LINKS.map((obj, i) => (
            <Link key={i} target="_blank" href={obj.link}>
              <Image src={obj.image} alt="icons" width={40} height={40} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-white h-[0.5px] opacity-20"></div>
      <p className="text-center text-base leading-6 font-normal text-white opacity-80 py-4">
        Copyright © 2025 ArrowTrade. All Rights Reserved.
      </p>
    </div>
    
  );
};

export default Footer;
