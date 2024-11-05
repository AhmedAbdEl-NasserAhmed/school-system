import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex items-center  p-4">
      {/*Search Bar */}
      <SearchBar className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2" />

      {/*Icons And User */}
      <div className="flex items-center gap-6  justify-end w-full  ">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="search bar" width={14} height={14} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="search bar"
            width={14}
            height={14}
          />
          <span className="h-4 w-4 text-xs rounded-full absolute bg-purple-500 text-white flex justify-center items-center -top-2 -right-2 ">
            3
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John duo</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
        />
      </div>
    </nav>
  );
};

export default NavBar;
