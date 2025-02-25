
import React from "react";
import Description from "../common/Description";
import Image from "next/image";
import Heading from "./Heading";

interface AiDriven {
  map: { title: string; description: string }[];
  heading: string;
  colorHeading: string;
  description?: string;
  image: string;
}

const CustomMarket = ({
  map,
  heading,
  colorHeading,
  description,
  image,
}: AiDriven) => {
  return (
    <div className="container mx-auto max-w-[1140px]">
      <div className="max-w-[655px]">
        <Heading title={heading} textTwo={colorHeading} />
        {description && (
            <p className="sm:text-base text-sm font-normal text-white opacity-80 !leading-custom-xl pt-4">{description}</p>
        )}
        <div className="flex flex-col gap-y-5 pt-[30px]">
          {map &&
            map.length > 0 &&
            map.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <p className="text-white leading-custom-xl font-semibold max-md:text-sm">
                  {item.title}
                </p>
                <Description title={item.description} />
              </div>
            ))}
        </div>
        <div className="mt-10 max-lg:mt-8 max-md:mt-5 max-sm:mt-3 rounded-[10px] bg-aiDriven !p-[1px]">
          <div className="!bg-navy-blue border border-light-green p-2.5 max-w-[653px] rounded-[10px] w-full h-full">
            <Image
              src={image}
              width={635}
              height={550}
              alt="images"
              className="pointer-events-none max-lg:max-w-[635px] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMarket;
