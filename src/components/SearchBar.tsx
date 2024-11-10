"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = ({ className }: { className: string }) => {
  const [value, setValue] = useState<string>("");

  const searchParams = useSearchParams();

  const pathName = usePathname();

  const { push } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    params.set("search", value.toString());

    push(`${pathName}?${params}`);
    // eslint-disable-next-line
  }, [value]);

  return (
    <div className={className}>
      <Image src="/search.png" alt="search bar" width={14} height={14} />
      <input
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-transparent w-[200px] p-2"
        type="text"
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBar;
