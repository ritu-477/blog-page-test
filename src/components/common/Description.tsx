import React from "react";

interface DescriptionProps {
  title: string;
  customClass?: string; 
}

const Description: React.FC<DescriptionProps> = ({ title,customClass }) => {
  return (
    <p className={`sm:text-base text-sm font-normal text-white opacity-80 !leading-custom-xl${customClass || ""}`}>
      {title} 
    </p>
  );
};

export default Description;
