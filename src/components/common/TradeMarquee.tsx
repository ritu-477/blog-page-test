import Marquee from "react-fast-marquee";
import { TRADE_LIST } from "@/utils/helper";

const TradeMarquee = () => {
  return (
    <Marquee direction="left" pauseOnHover={true}>
      <div className="flex items-center gap-[60px] bg-light-green py-[18px]">
        {TRADE_LIST.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-[6px] ${i === 0 ? "pl-14" : ""}`}
          >
            <p className="text-base max-md:text-sm max-sm:text-xs leading-[19.36px] text-black">
              {item.title}
            </p>
            <div className="bg-custom-gray py-1 pl-[11px] pr-[7px] rounded-full flex items-center gap-[6px]">
              <p className="text-base max-md:text-sm max-sm:text-xs leading-[19.36px] text-white">
                {item.stock}
              </p>
              <span
                className={`h-[10px] w-[10px] rounded-full ${
                  i === 2 ? "bg-custom-red" : "bg-custom-green"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default TradeMarquee;
