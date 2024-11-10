import { UseFormRegisterReturn } from "react-hook-form";

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
