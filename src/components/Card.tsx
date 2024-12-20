import { Student, Teacher } from "@prisma/client";
import Image from "next/image";
import FormContainer from "./FormContainer";

const Card = ({
  person,
  data,
  table
}: {
  person: Teacher | Student;
  data: any;
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
}) => {
  return (
    <div className="flex items-center bg-customColorSky py-6 px-4 rounded-md flex-1 gap-4 ">
      {/* Image */}
      <div className="w-1/3">
        <Image
          className="w-32 h-32 rounded-full object-cover "
          src={person?.img || "/noAvatar.png"}
          alt="profile-image"
          width={144}
          height={144}
        />
      </div>
      {/* Information */}
      <div className="w-2/3 flex flex-col gap-4 justify-between ">
        <div className="flex items-center justify-between">
          <h2 className="font-semiboldld text-xl">{person?.name}</h2>
          <FormContainer table={table} type="update" data={data} />
        </div>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          molestiae?
        </p>
        <ul className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
          <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/blood.png" alt="" width={14} height={14} />
            <span>{person?.bloodType}</span>
          </li>

          <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/mail.png" alt="" width={14} height={14} />
            <span>{person?.email || "-"}</span>
          </li>
          <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/phone.png" alt="" width={14} height={14} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
