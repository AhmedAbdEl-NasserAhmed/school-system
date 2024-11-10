import {
  Assignment,
  Event,
  Class,
  Exam,
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

export type ExamList = Exam & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

export type AssignmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

export type ResultList = {
  id: number;
  title: string;
  studentName: string;
  teacherName: string;
  score: number;
  className: string;
  startTime: Date;
};

export type EventList = Event & { class: Class };

export type AnnouncementList = Event & { class: Class };
