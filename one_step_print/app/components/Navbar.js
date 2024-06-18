import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex flex-nowrap justify-between align-top h-[165px] w-full  pl-[20px] pt-[20px] pr-12 fixed ">
      <Image
        src="/105X165.svg"
        width={105}
        height={165}
        alt="logo"
        className="bg-gray-300"
      />
      <div className="flex flex-row justify-between align-top  items-start flex-nowrap gap-2 w-[424px] mt-[24px] ">
        <Link
          className="uppercase bg-black w-full text-white rounded-[32px] text-center align-middle p-2 mt-1 "
          href="/"
          width={325}
          height={64}
        >
          Request a quote
        </Link>

        {/* Custom Hamburger */}
        <div className="flex">
          <button className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[48px] ">
              <div className="flex flex-col justify-around w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
