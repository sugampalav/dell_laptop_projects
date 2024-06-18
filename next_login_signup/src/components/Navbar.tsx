import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const NavLinks = [
    {
      label: "Categories",
      link: "/",
    },
    {
      label: "Sale",
      link: "/",
    },
    {
      label: "Clearance",
      link: "/",
    },
    {
      label: "New Stock",
      link: "/",
    },
    {
      label: "Trending",
      link: "/",
    },
  ];
  return (
    <nav className="h-[100px]">
      <div className="flex h-[36px]  justify-end">
        <div className="mr-[40px] mt-[12px] flex gap-5  text-end text-[12px] leading-[12.52px]">
          <Link href="/">Help</Link>
          <Link href="/">Orders & Returns</Link>
          <Link href="/">Hi, John</Link>
        </div>
      </div>
      <div className="mx-10 flex flex-row items-baseline justify-between">
        <span className=" text-[32px] font-bold uppercase leading-[38.73px] text-[#0000000]">
          ECOMMERCE
        </span>
        <div className="gap-[32px]text-[16px] h-[19px] justify-center font-semibold leading-[19.36px] text-[#000000]">
          {NavLinks.map((x) => (
            <Link
              href={x.link}
              key={x.label}
              className="transition duration-300 ease-in-out even:mx-[32px] hover:border-b-2 hover:border-[#000000]  hover:shadow-lg dark:hover:shadow-black/10"
            >
              {x.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto flex items-baseline ">
          <Image
            src="/Search.svg"
            width={32}
            height={32}
            alt="search"
            className="mr-[32px]"
          />
          <Image src="/Cart.svg" width={32} height={32} alt="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
