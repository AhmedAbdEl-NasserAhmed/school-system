"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { TeacherSchema } from "@/schemas/schemas";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Image from "next/image";

const TeacherForm = ({
  type,
  data
}: {
  type: "create" | "update" | "delete";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(TeacherSchema),
    mode: "onChange"
  });

  function omSubmit() {}

  return (
    <form
      className="flex flex-col gap-8 w-full "
      onSubmit={handleSubmit(omSubmit)}
    >
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
          register={{ ...register("userName") }}
          errorMessage={
            errors["userName"] && errors["userName"]?.message?.toString()
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
          defaultvalue={data?.firstName}
          label="First Name"
          register={{ ...register("firstName") }}
          errorMessage={
            errors["firstName"] && errors["firstName"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.lastName}
          label="Last Name"
          register={{ ...register("lastName") }}
          errorMessage={
            errors["lastName"] && errors["lastName"]?.message?.toString()
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
            <option value="male">Male</option>
            <option value="female">Fe Male</option>
          </select>
          {errors["sex"] && (
            <ErrorMessage
              message={errors?.["sex"]?.message?.toString() as string}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 md:w-1/4 w-full self-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer "
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload Photo</span>
          </label>

          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors["img"] && (
            <ErrorMessage
              message={errors?.["img"]?.message?.toString() as string}
            />
          )}
        </div>
      </div>

      <Button className="bg-blue-400 text-white p-2 rounded-md" type="submit">
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default TeacherForm;
