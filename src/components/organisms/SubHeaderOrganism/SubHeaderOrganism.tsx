import { FC } from "react";
import { AiOutlineClockCircle, AiOutlineWhatsApp } from "react-icons/ai";

export const SubHeaderOrganism: FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#373737] w-full text-[#fff] p-4 md:p-8">
      <p className="mb-4 md:mb-0">Welcome to worldwide MarketKG!</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <AiOutlineClockCircle className="mr-2" size={20} />
          <span className="mr-2">08:00 - 19:00</span>
        </div>
        <div className="flex items-center">
          <AiOutlineWhatsApp className="mr-2" size={20} />
          <span className="mr-2">+996707654499</span>
        </div>
      </div>
    </div>
  );
};
