import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import AllBlogs from "./AllBlogs";
import Description from '../common/Description'
import LatestArticles from "./LatestArticles";
import Footer from "../common/Footer";
const Hero = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/png/hero-section-layer.png"
        alt=""
        width={237}
        height={237}
        className="absolute top-0 left-0 max-w-80 w-full"
      />
      <Header />
      <div className="container">
                  <h1 className='font-normal pt-[70px] text-center max-w-[718px] mx-auto text-4xl md:text-5xl lg:text-custom-2xl !leading-custom-lg text-white'>Unlock Knowledge with Our <span className='text-light-green font-semibold'>Featured Articles</span></h1>
                  <p className="sm:text-base text-sm !font-normal text-white opacity-80 !leading-custom-xl text-center max-w-[674px] mx-auto">
          Explore our latest articles, insights, and expert advice on industry
          trends. Stay informed, gain new perspectives, and discover valuable
          tips to help you stay ahead.
        </p>
        </div>

        <AllBlogs />
        <LatestArticles/>
        <Footer/>
      
    </div>
  );
};

export default Hero;
