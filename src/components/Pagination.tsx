"use client";

import { ITEMS_PER_PAGE } from "@/constants/constants";
import Button from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const pathName = usePathname();

  const { push } = useRouter();

  function handleChangePage(newPage: number) {
    const params = new URLSearchParams(window.location.search);

    params.set("page", newPage.toString());

    push(`${pathName}?${params}`);
  }

  return (
    <div className="p-4 text-gray-500 flex items-center justify-between">
      <Button
        onClick={() => handleChangePage(page - 1)}
        disabled={page === 1}
        className="disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 py-2 px-4 text-xs font-bold rounded-md "
        type="button"
      >
        Prev
      </Button>
      <div className="flex items-center justify-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEMS_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <Button
                onClick={() => handleChangePage(pageIndex)}
                key={index}
                className={`${
                  pageIndex === page ? "bg-customColorSky" : ""
                } px-2 rounded-sm`}
                type="button"
              >
                {pageIndex}
              </Button>
            );
          }
        )}
      </div>
      <Button
        disabled={page === Math.ceil(count / ITEMS_PER_PAGE)}
        onClick={() => handleChangePage(page + 1)}
        className="disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 py-2 px-4 text-xs font-bold rounded-md "
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
