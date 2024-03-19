import Image from "next/image";
import React from "react";
import { logoImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";

export default function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          src={logoImg}
          alt="logo"
          width={24}
          height={24}
          style={{ color: "white" }}
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          <ul className="flex">
            {navLists.map((nav, i) => (
              <li
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                key={i}
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="search image" width={18} height={18} />
          <Image src={bagImg} alt="search image" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
