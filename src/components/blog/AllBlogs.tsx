"use client";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "../common/CustomButton";
import { useSearchParams } from "next/navigation";
import { IconSearch } from '@/utils/icons'
import Description from "../common/Description";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Link from "next/link";

const AllBlogs = () => {
  const [open, setOpen] = useState(6);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 400);

  useEffect(() => {
    const param = searchParams.get("page");
    if (param) {
      setOpen(parseInt(param) * 3);
    }
  }, [searchParams]);

  const allCard = ARTICLES_CARD_LIST.slice(0, open).filter(
    (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowMore = () => {
    const nextPage = open < ARTICLES_CARD_LIST.length ? open / 3 + 1 : 1;
    setOpen(nextPage * 3);
    window.history.pushState(null, "", `?blog/page=${nextPage}`);
  };

  return (
    <div className="relative max-w-[1920px] mx-auto">
      <Image
        width={237}
        height={237}
        className="object-cover absolute right-0 top-[35%] lg:block hidden -z-10"
        src="/assets/images/png/all-blogs-ellipse.png"
        alt="all-blogs-ellipse"
      />
      <div className="pt-[30px] container mx-auto xl:pb-[180px] lg:pb-28 md:pb-20 pb-12">
        <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white border-opacity-25 max-w-[558px] mx-auto rounded-full">
          <label htmlFor="search" className="cursor-pointer">
            <IconSearch />
          </label>
          <input
            type="text"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-transparent outline-none placeholder:text-white placeholder:opacity-80 text-white opacity-80 placeholder:leading-6 leading-6"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 gap-4 max-w-[1140px] mx-auto w-full pt-[70px]">
          {allCard.map((obj, i) => (
            <Link
              key={i}
              href={`/blog/${obj.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <div
                key={i}
                className="relative w-full max-w-[364px] mx-auto border border-light-green rounded-[10px] bg-white bg-opacity-[0.03] h-[498px] overflow-hidden"
              >
                <div className="max-w-[364px] overflow-hidden h-[237px]">
                  <Image
                    width={364}
                    height={237}
                    className="max-w-[364px] object-cover h-[237px] hover:scale-110 duration-300 ease-linear"
                    src={obj.image}
                    alt="article image"
                  />
                </div>
                <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
                  {obj.date}
                </p>
                <div className="px-5">
                  <div className="w-full xl:gap-6 gap-4 flex items-center justify-center -mt-6 relative z-10">
                    <CustomButton
                      title="Productivity"
                      customClass="py-[6px] bg-light-black hover:text-light-green hover:bg-white border border-light-green text-sm text-white xl:px-[31px] px-6 opacity-80 hover:opacity-100 rounded-full text-sm leading-custom-xl min-w-[154px]"
                    />
                    <CustomButton
                      title={obj.timeReamining}
                      customClass="py-[6px] opacity-80 hover:opacity-100 text-nowrap hover:text-light-green hover:bg-white bg-dark-black border border-white text-sm text-white opacity-80 xl:px-[37px] px-6 leading-custom-xl"
                    />
                  </div>
                  <h3 className="font-semibold text-nowrap text-xl text-white pt-6 pb-2.5 leading-custom-sm">
                    {obj.title}
                  </h3>
                  <Description title={obj.description} />
                  <div className="w-full flex justify-between items-center pt-6">
                    <div className="flex items-center gap-2.5">
                      <Image
                        width={50}
                        height={50}
                        className="max-w-[50px] object-cover"
                        src={obj.authorImg}
                        alt="author image"
                      />
                      <p className="text-base font-semibold text-white">
                        {obj.authorName}
                      </p>
                    </div>
                    <Image
                      src="/assets/images/svg/icon-arrow.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          <CustomButton
            myOnClick={handleShowMore}
            customClass="text-black px-6 py-4 bg-light-green border border-light-green hover:text-white hover:bg-black"
            title={
              open < ARTICLES_CARD_LIST.length
                ? "Show all blogs"
                : "Hide all blogs"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
