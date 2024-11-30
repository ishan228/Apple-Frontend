import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" cursor-pointer flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden ">
          {[
            "Store",
            "Mac",
            "iPhone",
            "Watch",
            "Vision",
            "AirPods",
            "Entertainment",
            "Accessories",
          ].map((nav) => (
            <div
              key={nav}
              className="text-gray hover:text-white text-sm cursor-pointer mx-4 transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div
          className="flex items-center gap-7 max-sm:justify-end
        max-sm:flex-1"
        >
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
