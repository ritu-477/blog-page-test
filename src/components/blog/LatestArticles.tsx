
"use client";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomButton from "../common/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination,A11y,Autoplay } from "swiper/modules";
import Heading from "../common/Heading";

const LatestArticles = () => {
    return (
      <div className="relative lg:pb-[120px] md:pb-24 pb-12 max-w-[1920px] mx-auto">
        <div className="container">
          <Heading customClass="text-center lg:pb-[70px] pb-10" title="Latest " textTwo="Articles"/>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".right-btn",
              prevEl: ".left-btn",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Navigation, Pagination, A11y,Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 1,
              },
            }}
            className="flex items-center"
          >
            {ARTICLES_CARD_LIST.slice(-3).map((obj, i) => (
              <SwiperSlide key={i}>
                <div className="relative p-[1px] rounded-[10px] bg-gradient-to-bl from-light-green/0 to-light-green/100">
                <div className="relative w-full max-w-[364px] mx-auto h-[498px] rounded-[10px] bg-light-black pb-10 overflow-hidden">
                  <div className="max-w-[364px] overflow-hidden h-[237px]">
                    <Image
                      width={364}
                      height={237}
                      className="max-w-[364px] pointer-events-none object-cover hover:scale-110 duration-300 ease-linear"
                      src={obj.image}
                      alt="article image"
                    />
                  </div>
                  <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
                    {obj.date}
                  </p>
                  <div className="px-5">
                    <div className="w-full gap-4 xl:gap-6 flex items-center justify-center -mt-6 relative z-30">
                      <CustomButton
                        title="Productivity"
                        customClass="py-[6px] border border-light-green text-nowrap xl:px-[34.875px] px-6 bg-light-black text-white shadow-none hover:text-light-green hover:bg-white rounded-full text-sm leading-custom-xl xl:min-w-[154px] opacity-80 hover:opacity-100"
                      />
                      <CustomButton
                        title={obj.timeReamining}
                        customClass="py-[6px] opacity-80 hover:opacity-100 border border-white text-nowrap xl:px-[34.875px] px-6 bg-dark-black text-white shadow-none rounded-full text-sm leading-custom-xl border-white xl:min-w-[154px] hover:bg-white hover:text-light-green"
                      />
                    </div>
                    <h3 className="text-white text-nowrap pt-6 pb-2.5 text-xl font-semibold leading-custom-sm">
                      {obj.title}
                    </h3>
                    <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">
                      {obj.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <Image
                          width={50}
                          height={50}
                          className="max-w-[50px] object-cover pointer-events-none"
                          src={obj.authorImg}
                          alt="author image"
                        />
                        <p className="text-white text-base font-semibold">
                          {obj.authorName}
                        </p>
                      </div>
                      <Image
                        src="/assets/images/svg/icon-arrow.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                        className="pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination block lg:hidden"></div>
          <div className="right-btn absolute top-1/2 max-xl:hidden left-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-light-green">
            <Image
              src="/assets/images/svg/right-arrow.svg"
              alt="right-arrow"
              width={30}
              height={27}
            />
          </div>
          <div className="left-btn absolute top-1/2 max-xl:hidden right-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-light-green">
            <Image
              src="/assets/images/svg/left-arrow.svg"
              alt="left-arrow"
              width={30}
              height={27}
            />
          </div>
        </div>
      </div>
    );
};

export default LatestArticles;
