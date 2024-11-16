"use client";
import { createTeacher, updateTeacher } from "@/lib/actions";
import { teacherSchema, TeacherSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CldUploadButton,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults
} from "next-cloudinary";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Image from "next/image";

const TeacherForm = ({
  type,
  data,
  setOpenModal,
  relatedData
}: {
  type: "create" | "update" | "delete";
  data?: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  relatedData: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TeacherSchema>({
    resolver: zodResolver(teacherSchema),
    mode: "onChange"
  });

  const { subjects } = relatedData;

  const [images, setImages] = useState<string[]>([]);

  const [state, formAction] = useFormState(
    type === "create" ? createTeacher : updateTeacher,
    {
      success: false,
      error: false
    }
  );
  const { refresh } = useRouter();

  const onSubmit = handleSubmit((data) => {
    formAction(data);
  });

  useEffect(() => {
    if (state.success) {
      toast(`Teacher has been ${type === "create" ? "created" : "updated"} `);
      refresh();
      setOpenModal(false);
    }
  }, [state, setOpenModal, refresh, type]);

  console.log("images", images);

  return (
    <form className="flex flex-col gap-8 w-full " onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "Create a new Teacher"
          : `Update Teacher ${data.username} `}
      </h1>
      <span className="text-sm text-gray-400 font-medium">
        Authentication information
      </span>
      <div className="flex flex-wrap gap-4 justify-between">
        <Input
          defaultvalue={data?.username}
          label="User Name"
          register={{ ...register("username") }}
          errorMessage={
            errors["username"] && errors["username"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.email}
          label="Email Address"
          register={{ ...register("email") }}
          errorMessage={errors["email"] && errors["email"]?.message?.toString()}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.password}
          label="Password"
          register={{ ...register("password") }}
          errorMessage={
            errors["password"] && errors["password"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="password"
        />
      </div>
      <span className="text-sm text-gray-400 font-medium">
        Personal Inforamtion
      </span>
      <div className="flex flex-wrap gap-4 justify-between">
        <Input
          defaultvalue={data?.name}
          label="First Name"
          register={{ ...register("name") }}
          errorMessage={errors["name"] && errors["name"]?.message?.toString()}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.surname}
          label="Last Name"
          register={{ ...register("surname") }}
          errorMessage={
            errors["surname"] && errors["surname"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.phone}
          label="Phone"
          register={{ ...register("phone") }}
          errorMessage={errors["phone"] && errors["phone"]?.message?.toString()}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.address}
          label="Address"
          register={{ ...register("address") }}
          errorMessage={
            errors["address"] && errors["address"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.bloodType}
          label="BloodType"
          register={{ ...register("bloodType") }}
          errorMessage={
            errors["bloodType"] && errors["bloodType"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.dateOfBirth}
          label="Birth Day"
          register={{ ...register("birthday") }}
          errorMessage={
            errors["birthday"] && errors["birthday"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="date"
        />

        <div className="flex flex-col gap-2 md:w-1/4 w-full">
          <label className="text-xs text-gray-500 ">Sex</label>

          <select
            defaultValue={data?.sex}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Fe Male</option>
          </select>
          {errors["sex"] && (
            <ErrorMessage
              message={errors?.["sex"]?.message?.toString() as string}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Subjects</label>
          <select
            multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("subjects")}
            defaultValue={data?.subjects}
          >
            {subjects.map((subject: { id: number; name: string }) => (
              <option value={subject.id} key={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
          {errors.subjects?.message && (
            <p className="text-xs text-red-400">
              {errors.subjects.message.toString()}
            </p>
          )}
        </div>

        <CldUploadWidget
          options={{
            multiple: true,
            maxFiles: 5
          }}
          uploadPreset="school"
          onSuccess={(result, { widget }) => {
            const info = result.info as Record<string, any>;
            if (info && "secure_url" in info) {
              setImages((data) => [...data, info.secure_url]);
            }
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div
                className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  open();
                }}
              >
                <Image src="/upload.png" alt="" width={28} height={28} />
                <span>Upload A photo</span>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>

      <Button className="bg-blue-400 text-white p-2 rounded-md" type="submit">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default TeacherForm;
