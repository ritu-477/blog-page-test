
// "use client";
// import { HEADER_LIST } from "@/utils/helper";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import CustomButton from "../common/CustomButton"
// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState<Number | null>(4);
//   const activeHandler = (index: number) => {
//     setActive(active === index ? null : index);
//   };
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//     return (
//       <nav className="overflow-hidden">
//         <div className="pb-[19px] pt-[18px] max-lg:py-4 shadow-[0px_4px_8px_0px#00000040] max-w-[1280px] mx-auto">
//           <div className="max-w-full mx-auto">
//             <div className="px-4 sm:px-[40px] flex items-center justify-between bg-white/10 rounded-[60px] py-4 border border-white/15 backdrop-blur-[24px]">
//               <Link href="/">
//                 <Image
//                   src="/assets/images/webp/nav-logo.webp"
//                   alt="page-logo"
//                   width={150}
//                   height={44}
//                   className="pointer-events-none w-[150px] h-[44px] max-lg:w-[120px] max-sm:w-[90px]"
//                 />
//               </Link>
//               <div
//           className={`flex gap-6 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full max-lg:z-50 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
//             open ? "max-lg:right-0 max-lg:bg-black" : "max-lg:-right-full"
//           }`}
//         >
//                 <div className="flex max-lg:flex-col items-center gap-[38px]">
//                   {HEADER_LIST.map((item, i) => (
//                     <Link
//                       onClick={() => {
//                         setOpen(false);
//                         setActive(active === i ? null : i);
//                       }}
//                       key={i}
//                       href={item.link}
//                       className={`text-base transition-all duration-300 max-sm:text-lg hover:text-light-green font-bold leading-[20.11px] ${
//                         active === i ? "text-light-green" : "text-white"
//                       }`}
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-6">
//                 <CustomButton customClass="text-light-green border border-light-green px-4 py-3.5" title="Sign Up" />
//                 <CustomButton
//                   customClass="text-black bg-light-green px-[24.7px] py-3.5 border border-light-green"
//                   title="Login"
//                 />
//               </div>
//               <div className="flex items-center gap-10 lg:hidden">
//                 <button
//                   onClick={() => setOpen(!open)}
//                   className="overflow-hidden relative z-50 lg:hidden size-8 gap-[4px] flex flex-col justify-center items-center"
//                 >
//                   <span
//                     className={`w-8 h-[5px] transition-all duration-300 bg-light-green rounded-lg ${
//                       open ? "translate-x-10" : ""
//                     }`}
//                   ></span>
//                   <span
//                     className={`w-8 h-[5px] transition-all duration-300 bg-light-green rounded-lg relative ${
//                       open ? "rotate-45" : ""
//                     } ${
//                       open ? "after:rotate-90" : ""
//                     } after:absolute after:top-0 after:left-0 after:w-8  after:h-[5px] after:bg-light-green after:rounded-lg`}
//                   ></span>
//                   <span
//                     className={`w-8 h-[5px] transition-all duration-300 bg-light-green rounded-lg ${
//                       open ? "-translate-x-10" : ""
//                     }`}
//                   ></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
// };

// export default Header;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../common/CustomButton";
import { HEADER_LIST } from "@/utils/helper";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Number | null>(4);
  const activeHandler = (index: number) => {
    setActive(active === index ? null : index);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="px-5 pt-4 max-sm:py-3 shadow-header-shadow">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center w-full py-4 bg-white bg-opacity-10 rounded-full pr-10 pl-[88px] border border-white border-opacity-15 max-lg:pl-12">
        <Link href="#">
          <Image
            width={150.2}
            height={44.06}
            src="/assets/images/webp/nav-logo.webp"
            className="max-lg:w-28 max-sm:w-20 object-cover"
            alt="logo image"
          />
        </Link>
        <div
          className={`flex gap-6 max-lg:fixed max-lg:top-0 max-lg:flex-col max-lg:justify-center max-lg:w-full z-40 max-lg:items-center max-lg:h-full duration-300 ease-linear ${
            open ? "max-lg:right-0 max-lg:bg-black" : "max-lg:-right-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <div key={i} className=" cursor-pointer">
              <Link
                href={obj.link}
                onClick={() => {
                  {
                    setOpen(!open);
                  }
                  activeHandler(i);
                }}
                className={`cursor-pointer text-base leading-[19.36px] duration-300 ease-linear opacity-70 ${
                  active === i
                    ? "text-light-green opacity-100"
                    : "text-white font-normal"
                }`}
              >
                {obj.title}
              </Link>
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center">
            <CustomButton
              title="Sign Up"
              customClass="lg:hidden shadow-none text-black bg-light-green px-[24.7px] py-3.5 border border-light-green hover:bg-light-green hover:text-black"
            />
            <CustomButton
              title="Login"
              customClass="lg:hidden text-black bg-light-green px-[24.7px] py-3.5 border border-light-green !text-black hover:text-lightGreen hover:bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <CustomButton
            title="Sign Up"
            customClass ="max-lg:hidden shadow-none text-light-green border border-light-green px-4 py-3.5 hover:bg-light-green hover:text-black"
          />
          <CustomButton
            title="Login"
            customClass ="max-lg:hidden text-black bg-light-green px-[24.7px] py-3.5 border border-light-green !text-black rounded-full hover:!text-lightGreen hover:bg-transparent"
          />
        </div>

        {/* Toggle button */}
        <div
          onClick={() => setOpen(!open)}
          className="z-50 flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "rotate-45 translate-y-3"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-translate-x-10 opacity-0 duration-700"
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white duration-300 ease-linear rounded ${
              open && "-rotate-45 -translate-y-1"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;