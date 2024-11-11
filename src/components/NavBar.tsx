import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { currentUser } from "@clerk/nextjs/server";
import { dark, neobrutalism } from "@clerk/themes";

const NavBar = async () => {
  const user = await currentUser();

  console.log(user);

  const role = user?.publicMetadata.role as string;

  const userName = user?.username as string;

  const imgUrl = user?.imageUrl as string;

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
          <span className="text-xs leading-3 font-medium">{userName}</span>
          <span className="text-[10px] text-gray-500 text-right">{role}</span>
        </div>
        <UserButton
          appearance={{
            layout: {
              shimmer: true,
              termsPageUrl: "https://clerk.com/terms"
            },
            baseTheme: [dark, neobrutalism]
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
