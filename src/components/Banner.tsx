import React from "react";

import dropdown_icon from "../assets/dropdown_arrow.png";

const Banner = () => {
  return (
    <div className="sm:h-screen h-screen-40 main-bg text-white px-48 py-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-2xl">{"</> Developer"}</div>
        <div className="flex items-center justify-between text-xs">
          <div className="mx-5 flex items-center cursor-pointer">
            HOME
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-5 flex items-center cursor-pointer">
            ABOUT US
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-5 flex items-center cursor-pointer">
            NEWS
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
          <div className="mx-5 flex items-center cursor-pointer">
            CONTACT US
            <img src={dropdown_icon} alt="" className="ml-1 w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 h-auto items-center justify-center">
        <div className="tracking-super-wide font-semibold text-2xl">
          DEVELOPMENT
        </div>
        <div className="my-6">We are web developer</div>
        <div>
          <button className="mx-1 px-2 py-1 rounded-sm text-xs font-semibold border-2 border-white">
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
