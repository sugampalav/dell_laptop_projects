import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[36px]
    bg-[#F4F4F4] text-[#000000]"
    >
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-center text-center ">
        <button className="px-auto mr-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 rtl:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <p className="text-[14px] font-medium">
          Get 10% off on business sign up
        </p>
        <button className="px-auto ml-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 rtl:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
