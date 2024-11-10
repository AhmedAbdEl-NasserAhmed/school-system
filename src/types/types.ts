import {
  Class,
  Lesson,
  Parent,
  Student,
  Subject,
  Teacher
} from "@prisma/client";

export type TeacherList = Teacher & { subjects: Subject[] } & {
  classes: Class[];
};

export type StudentList = Student & { class: Class };

export type ParentList = Parent & { students: Student[] };

export type SubjectList = Subject & { teachers: Teacher[] };

export type ClassList = Class & { supervisor: Teacher };

export type LessonList = Lesson & { subject: Subject } & {
  class: Class;
} & { teacher: Teacher };
