"use client";
import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import Link from "next/link";
import Heading from "../common/Heading";
import TradeMarquee from "../common/TradeMarquee";
import CustomButton from "../common/CustomButton";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

const DetailsHero = () => {
  const { tittle } = useParams();
  NProgress.start();
  setTimeout(() => {
    NProgress.done();
  }, 400);
  const blogArray = ARTICLES_CARD_LIST.filter(
    (obj) =>
      obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === tittle
  );

  const newBlogs: any = blogArray.length ? blogArray[0] : null;

  return (
    <div className="lg:pb-[271px] md:pb-[230px] pb-[200px] max-xl:bg-black/50">
      <TradeMarquee/>
      {newBlogs ? (
        <div className="max-w-[1440px] mx-auto relative">
          <Header />
          <div className="container mt-[91px] max-w-[1140px] mx-auto">
            <div className="max-w-[481px]">
                <Heading title='Real-Time ' textTwo="Market Insights" customClass="!max-w-[360px]" />
                <p className="text-base leading-6 pt-4 pb-[30px] text-white opacity-80 font-normal max-xl:max-w-none">
                {newBlogs.description}
              </p>
              <div className="gap-4 items-center flex">
                <CustomButton title=" Productivity" customClass="py-[6px] hover:opacity-100 border border-light-green text-nowrap xl:px-[31px] opacity-80 px-6 bg-light-black text-white shadow-none hover:text-light-green hover:bg-white ho
                 rounded-full text-sm leading-[21px] xl:min-w-[154px]"/>
                <CustomButton
                  title={newBlogs.timeReamining}
                 customClass="py-[6px] opacity-80 hover:opacity-100 text-nowrap hover:text-light-green hover:bg-white bg-dark-black border border-white text-sm text-white opacity-80 xl:px-[37px] px-6"
                />
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
              className="absolute h-[570px] object-cover top-0 right-0 -z-10"
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