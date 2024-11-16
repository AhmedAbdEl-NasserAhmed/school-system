"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createExam,
  createSubject,
  updateExam,
  updateSubject
} from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { examSchema, ExamSchema } from "@/schemas/schemas";
import Input from "../Input";

const ExamForm = ({
  type,
  data,
  setOpen,
  relatedData
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ExamSchema>({
    resolver: zodResolver(examSchema)
  });

  // AFTER REACT 19 IT'LL BE USEACTIONSTATE

  const [state, formAction] = useFormState(
    type === "create" ? createExam : updateExam,
    {
      success: false,
      error: false
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction(data);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Exam has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  const { lessons } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new exam" : "Update the exam"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <Input
          defaultvalue={data?.title}
          label="Exam title"
          register={{ ...register("title") }}
          errorMessage={errors["title"] && errors["title"]?.message?.toString()}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />

        <Input
          defaultvalue={data?.startTime}
          label="Start Date"
          register={{ ...register("startTime") }}
          errorMessage={
            errors["startTime"] && errors["startTime"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="datetime-local"
        />
        <Input
          defaultvalue={data?.username}
          label="End Date"
          register={{ ...register("endTime") }}
          errorMessage={
            errors["endTime"] && errors["endTime"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="datetime-local"
        />

        {data && (
          <Input
            type="text"
            label="Id"
            name="id"
            defaultvalue={data?.id}
            register={{ ...register("id") }}
            errorMessage={
              errors["endTime"] && errors["endTime"]?.message?.toString()
            }
            className=" hidden ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          />
        )}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Lesson</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("lessonId")}
            defaultValue={data?.teachers}
          >
            {lessons.map((lesson: { id: number; name: string }) => (
              <option value={lesson.id} key={lesson.id}>
                {lesson.name}
              </option>
            ))}
          </select>
          {errors.lessonId?.message && (
            <p className="text-xs text-red-400">
              {errors.lessonId.message.toString()}
            </p>
          )}
        </div>
      </div>
      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ExamForm;
