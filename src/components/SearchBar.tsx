import Image from "next/image";

const SearchBar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Image src="/search.png" alt="search bar" width={14} height={14} />
      <input
        className="outline-none bg-transparent w-[200px] p-2"
        type="text"
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBar;
