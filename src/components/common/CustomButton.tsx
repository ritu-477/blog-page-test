
import React from "react";

interface CustomButtonProps {
    title: string;
    customClass?: string;
    myOnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;}

const CustomButton: React.FC<CustomButtonProps> = ({ title, customClass = "", myOnClick, }) => {
    return (
        <button
            onClick={myOnClick}
            className={`sm:text-base rounded-[72px] text-sm leading-custom-sm transition-all duration-500  ${customClass}`}
        >
            {title}
        </button >
    );
};

export default CustomButton;
