"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { TeacherSchema } from "@/schemas/schemas";
import Button from "../Button";

const TeacherForm = ({
  type,
  data
}: {
  type: "create" | "update" | "delete";
  data: any;
}) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(TeacherSchema)
  });

  function omSubmit() {}

  return (
    <form onSubmit={handleSubmit(omSubmit)}>
      <Input
        className="focus:outline-none placeholder:text-lg px-5 py-4 border-2 border-borderLight rounded-lg w-full text-xl"
        type="text"
        register={{ ...register("userName") }}
      />
      <Button
        className="bg-slate-400 rounded-md text-white py-2 px-4 rouned-md border-none w-max self-center"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default TeacherForm;
