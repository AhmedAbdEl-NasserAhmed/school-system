import { InputProps } from "@/interfaces/interfaces";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  name,
  type,
  className,
  placeholder,
  register,
  value,
  onChange,
  label,
  errorMessage,
  defaultvalue,
  disabled
}: InputProps) => {



  
  return (
    <div className="flex flex-col gap-2 md:w-1/4 w-full">
      {label && <label className="text-xs text-gray-500 ">{label}</label>}
      <input
        defaultValue={defaultvalue}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        {...register}
        placeholder={placeholder}
        className={className}
        type={type}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;
