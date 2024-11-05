import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { lessonColumns } from "@/constants/constants";
import { renderLessonTableRow } from "@/helpers/helpers";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white mt-4 m-4 grow rounded-md p-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold hidden md:block ">All Lessons</h2>
        <div className="flex flex-col md:flex-row gap-4  items-center justify-between w-full md:w-auto">
          <SearchBar className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2" />
          <div className="flex justify-end items-center gap-4 w-full">
            <Button
              type="button"
              className="bg-customColorYellow w-8 h-8 rounded-full flex items-center justify-center"
            >
              <Image src="/filter.png" alt="photo" width={14} height={14} />
            </Button>
            <Button
              type="button"
              className="bg-customColorYellow w-8 h-8 rounded-full flex items-center justify-center"
            >
              <Image src="/sort.png" alt="photo" width={14} height={14} />
            </Button>
            {role === "admin" && (
              <Button
                type="button"
                className="bg-customColorYellow w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Image src="/plus.png" alt="photo" width={14} height={14} />
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Table
        columns={lessonColumns}
        renderRow={renderLessonTableRow}
        data={lessonsData}
      />
      {/* Bottom */}
      <Pagination />
    </div>
  );
};

export default page;