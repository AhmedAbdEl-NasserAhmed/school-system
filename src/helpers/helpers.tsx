import Button from "@/components/Button";

import {
  AnnouncementList,
  AssignmentList,
  ClassList,
  EventList,
  ExamList,
  LessonList,
  ParentList,
  ResultList,
  StudentList,
  SubjectList,
  TeacherList
} from "@/types/types";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { formatTime } from "./utils";
import FormContainer from "@/components/FormContainer";

export const renderTeacherTableRow = async (teacher: TeacherList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={teacher.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="flex items-center gap-4 p-3">
        <Image
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          src={teacher.img || "/noAvatar.png"}
          alt="profile"
          width={40}
          height={40}
        />
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{teacher.name}</h3>
          <p className="text-xs text-gray-500">{teacher.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{teacher.username}</h2>
      </td>
      <td className="hidden md:table-cell">
        {teacher.subjects.map((subject) => subject.name).join(",")}
      </td>
      <td className="hidden md:table-cell">
        {teacher.classes.map((classObject) => classObject.name).join(",")}
      </td>
      <td className="hidden lg:table-cell">
        <h2>{teacher.phone}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{teacher.address}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <Link href={`/list/teachers/${teacher.id}`}>
            <Button
              className="w-7 h-7 rounded-full bg-customColorSky flex items-center justify-center"
              type="button"
            >
              <Image src="/view.png" alt="" width={16} height={16} />
            </Button>
          </Link>
          {role === "admin" && (
            <FormContainer type="delete" table="teacher" id={teacher.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderStudentTableRow = async (student: StudentList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={student.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="flex items-center gap-4 p-3">
        <Image
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          src={student.img || "/noAvatar.png"}
          alt="profile"
          width={40}
          height={40}
        />
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-xs text-gray-500">{student.class.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{student.username}</h2>
      </td>
      <td className="hidden md:table-cell">
        <h2>{student.class.name[0]}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{student.phone}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{student.address}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <Link href={`/list/students/${student.id}`}>
            <Button
              className="w-7 h-7 rounded-full bg-customColorSky flex items-center justify-center"
              type="button"
            >
              <Image src="/view.png" alt="" width={16} height={16} />
            </Button>
          </Link>
          {role === "admin" && (
            <FormContainer type="delete" table="student" id={student.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderParentTableRow = async (parent: ParentList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;
  return (
    <tr
      key={parent.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{parent.name}</h3>
          <p className="text-xs text-gray-500">{parent.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{parent.students.map((student) => student.name).join(",")}</h2>
      </td>

      <td className="hidden lg:table-cell">
        <h2>{parent.phone}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{parent.address}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer type="update" table="parent" data={parent} />
              <FormContainer type="delete" table="parent" id={parent.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderSubjectTableRow = async (subject: SubjectList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={subject.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className=" p-3">
        <h3 className="font-semibold">{subject.name}</h3>
      </td>
      <td className="hidden md:table-cell">
        <h2>{subject.teachers.map((teacher) => teacher.name).join(",")}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer type="update" table="subject" data={subject} />
              <FormContainer type="delete" table="subject" id={subject.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderClassTableRow = async (classData: ClassList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={classData.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{classData.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{classData.capacity}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{classData.name[0]}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{classData.supervisor.name}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer type="update" table="class" />
              <FormContainer type="delete" table="class" />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderLessonTableRow = async (lesson: LessonList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={lesson.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{lesson.subject.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{lesson.class.name}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{lesson.teacher.name}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer type="update" table="lesson" data={lesson} />
              <FormContainer type="delete" table="lesson" id={lesson.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderExamsTableRow = async (exam: ExamList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={exam.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{exam.lesson.subject.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{exam.lesson.class.name}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{exam.lesson.teacher.name}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{formatTime(exam.startTime)}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormContainer type="update" table="exam" data={exam} />
                <FormContainer type="delete" table="exam" id={exam.id} />
              </>
            ))}
        </div>
      </td>
    </tr>
  );
};

export const renderAssignmentsTableRow = async (assignment: AssignmentList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={assignment.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{assignment.lesson.subject.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{assignment.lesson.class.name}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{assignment.lesson.teacher.name}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{formatTime(assignment.dueDate)}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormContainer type="update" table="assignment" data={assignment} />
                <FormContainer
                  type="delete"
                  table="assignment"
                  id={assignment.id}
                />
              </>
            ))}
        </div>
      </td>
    </tr>
  );
};
export const renderResultsTableRow = async (result: ResultList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={result.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{result.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{result.studentName}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{result.score}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{result.teacherName}</h2>
      </td>

      <td className="hidden lg:table-cell">
        <h2>{result.className}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{formatTime(result.startTime)}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormContainer type="update" table="result" data={result} />
                <FormContainer type="delete" table="result" id={result.id} />
              </>
            ))}
        </div>
      </td>
    </tr>
  );
};
export const renderEventTableRow = async (event: EventList) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={event.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{event.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{event.class?.name || "-"}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{formatTime(event.startTime)}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>
          {formatTime(event.startTime, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })}
        </h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>
          {formatTime(event.endTime, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })}
        </h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer type="update" table="event" data={event} />
              <FormContainer type="delete" table="event" id={event.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderAnnouncementsTableRow = async (
  announcement: AnnouncementList
) => {
  const user = await currentUser();

  const role = user?.publicMetadata.role as string;

  return (
    <tr
      key={announcement.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{announcement.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{announcement.class?.name || "-"}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{formatTime(announcement.startTime)}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormContainer
                type="update"
                table="announcement"
                data={announcement}
              />
              <FormContainer
                type="delete"
                table="announcement"
                id={announcement.id}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
