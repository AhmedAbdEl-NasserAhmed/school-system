import Button from "@/components/Button";
import FormModal from "@/components/FormModal";
import {
  AnnouncementData,
  AssignmentData,
  ClassData,
  EventData,
  ExamData,
  LessonData,
  ParentData,
  ResultData,
  StudentData,
  SubjectData
} from "@/interfaces/interfaces";
import { role } from "@/lib/data";
import { TeacherList } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export const renderTeacherTableRow = (teacher: TeacherList) => {
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
            <FormModal type="delete" table="teacher" id={+teacher.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderStudentTableRow = (student: StudentData) => {
  return (
    <tr
      key={student.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="flex items-center gap-4 p-3">
        <Image
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          src={student.photo}
          alt="profile"
          width={40}
          height={40}
        />
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-xs text-gray-500">{student.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{student.studentId}</h2>
      </td>
      <td className="hidden md:table-cell">
        <h2>{student.grade}</h2>
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
          <FormModal type="delete" table="student" id={student.id} />
        </div>
      </td>
    </tr>
  );
};

export const renderParentTableRow = (parent: ParentData) => {
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
        <h2>{parent.students.join(",")}</h2>
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
              <FormModal type="update" table="parent" data={parent} />
              <FormModal type="delete" table="parent" id={parent.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderSubjectTableRow = (subject: SubjectData) => {
  return (
    <tr
      key={subject.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className=" p-3">
        <h3 className="font-semibold">{subject.name}</h3>
      </td>
      <td className="hidden md:table-cell">
        <h2>{subject.teachers.join(",")}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="subject" />
              <FormModal type="delete" table="subject" id={subject.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderClassTableRow = (classData: ClassData) => {
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
        <h2>{classData.grade}</h2>
      </td>
      <td className="hidden lg:table-cell">
        <h2>{classData.supervisor}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="class" />
              <FormModal type="delete" table="class" />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderLessonTableRow = (lesson: LessonData) => {
  return (
    <tr
      key={lesson.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{lesson.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{lesson.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{lesson.teacher}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="lesson" data={lesson} />
              <FormModal type="delete" table="lesson" id={lesson.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderExamsTableRow = (exam: ExamData) => {
  return (
    <tr
      key={exam.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{exam.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{exam.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{exam.teacher}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{exam.date}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="exam" data={exam} />
              <FormModal type="delete" table="exam" id={exam.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export const renderAssignmentsTableRow = (assignment: AssignmentData) => {
  return (
    <tr
      key={assignment.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{assignment.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{assignment.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{assignment.teacher}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{assignment.dueDate}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="assignment" data={assignment} />
              <FormModal type="delete" table="assignment" id={assignment.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderResultsTableRow = (result: ResultData) => {
  return (
    <tr
      key={result.id}
      className="even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-customColorPurpleLight"
    >
      <td className="p-3">
        <div className=" flex flex-col ">
          <h3 className="font-semibold">{result.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <h2>{result.student}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{result.score}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{result.teacher}</h2>
      </td>

      <td className="hidden lg:table-cell">
        <h2>{result.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{result.date}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="result" data={result} />
              <FormModal type="delete" table="result" id={result.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderEventTableRow = (event: EventData) => {
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
        <h2>{event.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{event.date}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{event.startTime}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{event.endTime}</h2>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal type="update" table="event" data={event} />
              <FormModal type="delete" table="event" id={event.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
export const renderAnnouncementsTableRow = (announcement: AnnouncementData) => {
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
        <h2>{announcement.class}</h2>
      </td>

      <td className="hidden md:table-cell">
        <h2>{announcement.date}</h2>
      </td>

      <td>
        <div className="flex items-center gap-3">
          {role === "admin" && (
            <>
              <FormModal
                type="update"
                table="announcement"
                data={announcement}
              />
              <FormModal
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
