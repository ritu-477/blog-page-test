"use client";
import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import Link from "next/link";

const DetailsHero = () => {
    const { tittle } = useParams();
const blogArray = ARTICLES_CARD_LIST.filter(
  (obj) =>
    obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === tittle
);

const newBlogs: any = blogArray.length ? blogArray[0] : null; 

  return (
    <div className="pb-[271px]">
      {newBlogs ? ( 
        <div className="max-w-[1440px] mx-auto relative">
          <Header />
          <div className="container mt-[91px] max-w-[1140px] mx-auto">
            <div className="max-w-[481px]">
              <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
                {newBlogs.title}
                <span className="text-cyan hidden font-semibold max-sm:block">
                  Market Insights
                </span>
              </h2>
              <p className="text-base leading-6 text-lightGreen">
                {newBlogs.description}
              </p>
              <div className="gap-4 items-center flex">
                <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
                  Productivity
                </button>
                <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
                  {newBlogs.timeReamining}
                </button>
                <p className="leading-[150%] font-semibold max-md:text-sm text-white">
                  {newBlogs.date}
                </p>
              </div>
            </div>
            <Image
              width={720}
              height={570}
              alt="blogs image"
              src={newBlogs.image}
              className="absolute h-[570px] object-cover top-0 right-0"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <h2 className="text-4xl font-semibold text-white mt-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white mt-2">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailsHero;