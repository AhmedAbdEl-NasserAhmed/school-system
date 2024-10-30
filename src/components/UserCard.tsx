import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-customColorPurple even:bg-customColorYellow p-4 grow min-w-[130px] ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/05
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 ">1,234</h1>
      <h2 className="text-xm font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
