// import React from "react";
// import Image from "next/image";
// import CustomButton from "../common/CustomButton";
// import Description from "../common/Description";
// import { BLOG_LIST } from "@/utils/helper"; 

// const AllBlogs = () => {
//   return (
//     <div className="pb-[90px]">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {BLOG_LIST.map((obj, index) => ( 
//             <div key={index} className="w-full">
//               <div className="rounded-[10px] h-[498px] backdrop-blur-3xl bg-light-black border-light-green border">
//                 <Image
//                   className="h-auto object-cover w-full"
//                   src={obj.image}
//                   alt="Blog Image"
//                   width={364}
//                   height={237}
//                 />
//                 <div className="px-5 -translate-y-3 flex gap-4">
//                   <CustomButton
//                     customClass="py-[7px] bg-light-black border border-light-green text-sm text-white opacity-80 px-[31px]"
//                     title={obj.category}
//                   />
//                   <CustomButton
//                     customClass="py-[7px] bg-light-black border border-white text-sm text-white opacity-80 px-[37px]"
//                     title={obj.readTime}
//                   />
//                 </div>
//                 <div className="pt-3 px-5">
//                   <p className="pb-[10px] font-semibold text-xl text-white">
//                     {obj.title}
//                   </p>
//                   <Description title={obj.description} />
//                 </div>
//                 <div className="pt-6 px-5 flex justify-between items-center">
//                   <div className="flex items-center gap-[10px]">
//                     <Image
//                       className="w-[50px] h-[50px] rounded-full"
//                       src={obj.author.image}
//                       alt={obj.author.name}
//                       width={50}
//                       height={50}
//                     />
//                     <p className="text-base font-semibold text-white">
//                       {obj.author.name}
//                     </p>
//                   </div>
//                   <Image
//                     width={20}
//                     height={18}
//                     alt="icon-arrow"
//                     src="/assets/images/svg/icon-arrow.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-10">
//           <CustomButton
//             customClass="text-black px-6 py-4 bg-light-green border border-light-green hover:text-white hover:bg-black"
//             title="See All Blogs"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllBlogs;

"use client";
import { ARTICLES_CARD_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "../common/CustomButton";
import { useSearchParams } from "next/navigation";
import { IconSearch } from '@/utils/icons'
import Description from "../common/Description";


const BlogCards = () => {
  const [open, setOpen] = useState(3);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

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
    <div className="pt-[30px] container mx-auto pb-[180px]">
      <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white border-opacity-25 max-w-[558px] mx-auto rounded-full">
        <label htmlFor="search" className="cursor-pointer">
             <IconSearch/>
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
          <div
            key={i}
            className="relative w-full max-w-[364px] mx-auto border border-light-green rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden"
          >
            <div className="max-w-[364px] overflow-hidden h-[237px]">
              <Image
                width={364}
                height={237}
                className="max-w-[364px] object-cover hover:scale-110 duration-300 ease-linear"
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
                 customClass="py-[7px] bg-light-black border border-light-green text-sm text-white opacity-80 xl:px-[31px] px-6"
                />
                <CustomButton
                  title={obj.timeReamining}
                 customClass="py-[7px] text-nowrap bg-dark-black border border-white text-sm text-white opacity-80 xl:px-[37px] px-6"
                />
              </div>
              <h3 className="font-semibold text-xl text-white pt-6 pb-2.5 leading-custom-sm">
                {obj.title}
              </h3>
              <Description  title={obj.description} />             
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
  );
};

export default BlogCards;
