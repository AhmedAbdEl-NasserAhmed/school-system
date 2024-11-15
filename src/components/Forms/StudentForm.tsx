"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Image from "next/image";
import { studentSchema } from "@/schemas/schemas";
import Input from "../Input";
import { Dispatch, SetStateAction } from "react";

const StudentForm = ({
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
  } = useForm({
    resolver: zodResolver(studentSchema)
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "Create a new student"
          : `Update Student ${data.username} `}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <Input
          defaultvalue={data?.username}
          label="Username"
          register={{ ...register("username") }}
          errorMessage={
            errors["username"] && errors["username"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.lastName}
          label="Email"
          register={{ ...register("lastName") }}
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
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
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
          label="Blood Type"
          register={{ ...register("bloodType") }}
          errorMessage={
            errors["bloodType"] && errors["bloodType"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />
        <Input
          defaultvalue={data?.dateOfBirth}
          label="Birthday"
          register={{ ...register("birthday") }}
          errorMessage={
            errors["birthday"] && errors["birthday"]?.message?.toString()
          }
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          type="text"
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
