import Button from "@/components/Button";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { ITEMS_PER_PAGE, parentsColumns } from "@/constants/constants";
import { renderParentTableRow } from "@/helpers/helpers";
import { role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Image from "next/image";

const page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  const query: Prisma.ParentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [parents, count] = await prisma.$transaction([
    prisma.parent.findMany({
      where: query,
      include: {
        students: true
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1)
    }),

    prisma.parent.count({ where: query })
  ]);

  return (
    <div className="bg-white mt-4 m-4 grow rounded-md p-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold hidden md:block ">All Parents</h2>
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
            {role === "admin" && <FormModal type="create" table="parent" />}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Table
        columns={parentsColumns}
        renderRow={renderParentTableRow}
        data={parents}
      />
      {/* Bottom */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default page;
