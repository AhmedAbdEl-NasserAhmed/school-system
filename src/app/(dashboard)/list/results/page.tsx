import Button from "@/components/Button";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { ITEMS_PER_PAGE, resultsColumns } from "@/constants/constants";
import { renderResultsTableRow } from "@/helpers/helpers";
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

  const query: Prisma.ResultWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "studentId":
            query.studentId = value;
            break;
          case "search":
            query.OR = [
              {
                exam: { title: { contains: value, mode: "insensitive" } },
                student: { name: { contains: value, mode: "insensitive" } }
              }
            ];
            break;
          default:
            break;
        }
      }
    }
  }

  const [resultsResponse, count] = await prisma.$transaction([
    prisma.result.findMany({
      where: query,
      include: {
        student: { select: { name: true, surname: true } },
        exam: {
          include: {
            lesson: {
              select: {
                class: { select: { name: true } },
                teacher: { select: { name: true } }
              }
            }
          }
        },
        assignment: {
          include: {
            lesson: {
              select: {
                class: { select: { name: true } },
                teacher: { select: { name: true } }
              }
            }
          }
        }
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1)
    }),

    prisma.result.count({ where: query })
  ]);

  const results = resultsResponse.map((result) => {
    const assessment = result.exam || result.assignment;

    if (!assessment) return null;

    const isExam = "startTime" in assessment;

    return {
      id: result.id,
      title: assessment.title,
      studentName: result.student.name,
      teacherName: assessment.lesson.teacher.name,
      score: result.score,
      className: assessment.lesson.class.name,
      startTime: isExam ? assessment.startTime : assessment.startDate
    };
  });

  return (
    <div className="bg-white mt-4 m-4 grow rounded-md p-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold hidden md:block ">All Results</h2>
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
            {role === "admin" && <FormModal type="create" table="result" />}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Table
        columns={resultsColumns}
        renderRow={renderResultsTableRow}
        data={results}
      />
      {/* Bottom */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default page;
