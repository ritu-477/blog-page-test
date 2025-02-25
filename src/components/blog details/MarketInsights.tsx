import React from 'react';
import CustomMarket from "../common/CustomMarket";
import Image from 'next/image';
import {
  CHANGING_GAME_HEADING_LIST,
  CHANGING_GAME_LIST,
  MARKET_HEADING_LIST,
  MARKET_INSIGHTS_LIST,
} from "@/utils/helper";

const MarketInsights = () => {
  return (
    <div className="flex flex-col items-center pb-20 pt-10 bg-footer-bg bg-cover bg-no-repeat relative">
      <Image
        width={237}
        height={237}
        className="object-cover absolute right-0 top-1/3 lg:block hidden -z-10"
        src="/assets/images/png/all-blogs-ellipse.png"
        alt="all-blogs-ellipse"
      />
      <Image
        src="/assets/images/png/driven-left-ellipse.png"
        width={237}
        height={237}
        alt="left-ellipse"
        className="object-cover absolute left-0 top-2/5 lg:block hidden -z-10"
      />
      <Image
        width={237}
        height={237}
        className="object-cover absolute right-0 bottom-[-5%] lg:block hidden -z-10"
        src="/assets/images/png/realated-article-ellipse.png"
        alt="all-blogs-ellipse"
      />
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col gap-16 w-full lg:w-2/3">
          <CustomMarket
            map={MARKET_INSIGHTS_LIST}
            heading="What are AI-Driven "
            colorHeading="Market Insights?"
            description="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."
            image="/assets/images/webp/market-insights.webp"
          />
          <CustomMarket
            map={CHANGING_GAME_LIST}
            heading="How AI-Driven Market insights are "
            colorHeading="Changing The Game"
            image="/assets/images/webp/changing-game.webp"
          />
        </div>
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="bg-driven sticky top-1 w-full max-w-[364px] border border-light-green rounded-3xl py-6 px-5 max-h-[525px]">
            <div className="flex gap-4 items-center">
              <Image
                src="/assets/images/png/darrell-img.png"
                width={80}
                height={80}
                alt="profile image"
              />
              <p className="font-semibold text-white text-lg md:text-sm">
                Darrell Steward
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              <p className="font-semibold text-white text-lg md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {MARKET_HEADING_LIST.map((item, index) => (
                <p key={index} className="text-white/70 text-sm md:text-xs">
                  {item}
                </p>
              ))}
            </div>
            
            <div className="my-5 h-0.5 bg-white/25 w-full"></div>
            
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-white text-lg md:text-sm">
                How AI-Driven Market insights are changing the Game
              </p>
              {CHANGING_GAME_HEADING_LIST.map((item, index) => (
                <p key={index} className="text-white/70 text-sm md:text-xs">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;