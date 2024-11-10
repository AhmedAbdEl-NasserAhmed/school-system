"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./Forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>
});
const StudentForm = dynamic(() => import("./Forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>
});

// const SubjectForm = dynamic(() => import("./Forms/SubjectForm"), {
//   loading: () => <h1>Loading...</h1>
// });
// const ClassForm = dynamic(() => import("./Forms/ClassForm"), {
//   loading: () => <h1>Loading...</h1>
// });
// const ExamForm = dynamic(() => import("./Forms/ExamForm"), {
//   loading: () => <h1>Loading...</h1>
// });

const forms: {
  [key: string]: (type: "create" | "update", data: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

const FormModal = ({
  type,
  id,
  data,
  table
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  id?: number | string;
  data?: any;
}) => {
  const size = `${type === "create" ? "w-8 h-8" : "w-7 h-7"}`;

  const backgroundColor = `${
    type === "create"
      ? "bg-customColorYellow"
      : type === "update"
      ? "bg-customColorSky "
      : "bg-customColorPurple "
  }`;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const ref = useClickOutside({ close: setOpenModal, value: false });

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 ">
        <p className="text-center font-medium text-lg">
          Are you sure that you want to delete this {table} ?{" "}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            className="bg-red-700 rounded-md text-white py-2 px-4 rouned-md border-none w-max self-center"
            type="submit"
          >
            Delete
          </Button>

          <Button
            onClick={() => setOpenModal(false)}
            className="bg-slate-400 rounded-md text-white py-2 px-4 rouned-md border-none w-max self-center"
            type="submit"
          >
            Cancel
          </Button>
        </div>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form Not Found"
    );
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className={`${size} rounded-full flex items-center justify-center ${backgroundColor} `}
        type="button"
      >
        <Image src={`/${type}.png`} alt="button Image" width={16} height={16} />
      </Button>
      {openModal && (
        <div
          ref={ref}
          className="w-screen fixed h-screen top-0 left-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center "
        >
          <div className="relative rounded-md w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-white shadow-md flex items-center  justify-center p-4 ">
            <Form />
            <span
              onClick={() => setOpenModal(false)}
              className="absolute text-center top-4 right-4 text-xl cursor-pointer w-8 h-8 leading-[0] bg-slate-100 flex items-center justify-center rounded-full"
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
