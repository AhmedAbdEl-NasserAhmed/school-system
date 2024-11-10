import { Class, Subject, Teacher } from "@prisma/client";

export type TeacherList = Teacher & { subjects: Subject[] } & {
  classes: Class[];
};
