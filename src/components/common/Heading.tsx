import React from "react";
interface HeadingProps {
  title: string;
  customClass?: string; 
  textTwo?: string;
}

const Heading: React.FC<HeadingProps> = ({ title,customClass,textTwo}) => {
  return (
    <h2 className={`lg:text-5xl font-normal !leading-custom-md md:text-4xl text-3xl text-white ${customClass || ""}`}>
      {title}
      <span className="text-light-green font-semibold">{textTwo}</span>
    </h2>
  );
};

export default Heading;