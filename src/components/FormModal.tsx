"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./Button";
import dynamic from "next/dynamic";
import { useFormState } from "react-dom";
import {
  deleteSubject,
  deleteClass,
  deleteTeacher,
  deleteStudent,
  deleteExam
} from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormContainerProps } from "./FormContainer";

const deleteActionMap: { [key: string]: any } = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  exam: deleteExam,
  parent: deleteSubject,
  lesson: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject
};

const TeacherForm = dynamic(() => import("./Forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>
});
const StudentForm = dynamic(() => import("./Forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>
});

const SubjectForm = dynamic(() => import("./Forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>
});

const ClassForm = dynamic(() => import("./Forms/ClassForm"), {
  loading: () => <h1>Loading...</h1>
});

const ExamForm = dynamic(() => import("./Forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>
});

const forms: {
  [key: string]: (
    type: "create" | "update",
    data: any,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    relatedData?: any
  ) => JSX.Element;
} = {
  teacher: (type, data, setOpenModal, relatedData) => (
    <TeacherForm
      type={type}
      data={data}
      setOpenModal={setOpenModal}
      relatedData={relatedData}
    />
  ),
  student: (type, data, setOpenModal, relatedData) => (
    <StudentForm
      type={type}
      data={data}
      setOpenModal={setOpenModal}
      relatedData={relatedData}
    />
  ),
  subject: (type, data, setOpenModal, relatedData) => (
    <SubjectForm
      type={type}
      data={data}
      setOpenModal={setOpenModal}
      relatedData={relatedData}
    />
  ),
  class: (type, data, setOpenModal, relatedData) => (
    <ClassForm
      type={type}
      data={data}
      setOpenModal={setOpenModal}
      relatedData={relatedData}
    />
  )
};

const FormModal = ({
  type,
  id,
  data,
  table,
  relatedData
}: FormContainerProps & { relatedData?: any }) => {
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
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false
    });

    const { refresh } = useRouter();

    useEffect(() => {
      if (state.success) {
        toast(`${table} has been deleted`);
        refresh();
        setOpenModal(false);
      }
    }, [state, refresh]);

    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4 ">
        <input type="text | number" name="id" hidden value={id} />
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
      forms[table](type, data, setOpenModal, relatedData)
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
