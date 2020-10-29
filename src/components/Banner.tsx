import React from "react";

import dropdown_icon from "../assets/dropdown_arrow.png";

const Banner = () => {
  return (
    <div className="sm:h-screen h-screen-50 main-bg text-white sm:py-8 flex flex-col sm:items-center">
      <div className="flex justify-between items-center sm:w-2/3">
        <div className="font-semibold sm:text-2xl text-xl">
          {"</> "} Developer
        </div>
        <div className="md:flex hidden items-center justify-between text-xs">
          <div className="mx-3 flex items-center cursor-pointer">
            HOME
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-3 flex items-center cursor-pointer">
            ABOUT US
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-3 flex items-center cursor-pointer">
            NEWS
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-3 flex items-center cursor-pointer">
            CONTACT US
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 h-auto items-center justify-center">
        <div className="sm:tracking-super-wide font-semibold text-2xl">
          DEVELOPMENT
        </div>
        <div className="sm:my-6 m-2">We are web developer</div>
        <div className="mt-2 flex">
          <button className="sm:block hidden mx-1 px-2 py-1 rounded-sm text-xs font-semibold border-2 border-white">
            READ MORE
          </button>
          <button className="mx-1 px-2 py-1 rounded-sm text-xs font-semibold border-2 border-white text-black bg-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
