"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = ({ className }: { className: string }) => {
  const pathName = usePathname();

  const { push } = useRouter();

  function handleChangeParam(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(window.location.search);

    const { name, value } = e.target;

    params.set(name, value.toString());

    push(`${pathName}?${params}`);
  }

  return (
    <div className={className}>
      <Image src="/search.png" alt="search bar" width={14} height={14} />
      <input
        name="search"
        onChange={handleChangeParam}
        className="outline-none bg-transparent w-[200px] p-2"
        type="text"
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBar;
