export interface TeacherData {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

export interface StudentData {
  id: number;
  studentId: string;
  name: string;
  class: string;
  photo: string;
  grade: string;
  phone: string;
  address: string;
}

export interface ParentData {
  id: number;
  students: string[];
  name: string;
  email: string;
  photo: string;
  phone: string;
  address: string;
}

export interface SubjectData {
  id: number;
  teachers: string[];
  name: string;
}

export interface ClassData {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}

export interface LessonData {
  id: number;
  subject: string;
  class: number;
  teacher: number;
}

export interface ExamData {
  id: number;
  subject: string;
  class: number;
  teacher: number;
  date: string;
}

export interface AssignmentData {
  id: number;
  subject: string;
  class: number;
  teacher: number;
  dueDate: string;
}

export interface ResultstData {
  id: number;
  subject: string;
  class: number;
  teacher: number;
  dueDate: string;
}

export interface ResultData {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
}

export interface EventData {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}
export interface AnnouncementData {
  id: number;
  title: string;
  class: string;
  date: string; // assuming the date is in ISO format as a string
}
