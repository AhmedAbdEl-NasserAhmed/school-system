"use client";

import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { subjectSchema } from "@/schemas/schemas";
import { SubjectSchema } from "@/types/types";
import { createSubject } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SubjectForm = ({
  type,
  data,
  setOpenModal
}: {
  type: "create" | "update";
  data?: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SubjectSchema>({
    resolver: zodResolver(subjectSchema)
  });

  // AFTER REACT 19 IT'LL BE USEACTIONSTATE

  const [state, formAction] = useFormState(createSubject, {
    success: false,
    error: false
  });
  const { refresh } = useRouter();

  const onSubmit = handleSubmit((data) => {
    formAction(data);
  });

  useEffect(() => {
    if (state.success) {
      toast(`Subject has been ${type === "create" ? "created" : "updated"} `);
      refresh();
      setOpenModal(false);
    }
  }, [state]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new subject" : "Update the subject"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <Input
          name="name"
          defaultvalue={data?.name}
          label="Subject name"
          register={{ ...register("name") }}
          errorMessage={errors["name"] && errors["name"]?.message?.toString()}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />

        {data && (
          <Input
            name="id"
            defaultvalue={data?.id}
            label="Id"
            register={{ ...register("id") }}
            errorMessage={errors["id"] && errors["id"]?.message?.toString()}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            type="text"
          />
        )}
        {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Teachers</label>
          <select
            multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("teachers")}
            defaultValue={data?.teachers}
          >
            {teachers.map(
              (teacher: { id: string; name: string; surname: string }) => (
                <option value={teacher.id} key={teacher.id}>
                  {teacher.name + " " + teacher.surname}
                </option>
              )
            )}
          </select>
          {errors.teachers?.message && (
            <p className="text-xs text-red-400">
              {errors.teachers.message.toString()}
            </p>
          )}
        </div> */}
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

export default SubjectForm;
