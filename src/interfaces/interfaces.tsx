import { UseFormRegisterReturn } from "react-hook-form";

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
export interface InputProps {
  name?: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  label?: string;
  onChange?: (e: any) => void;
  errorMessage?: string;
  disabled?: boolean;
  defaultvalue?: string;
  className: string;
}
