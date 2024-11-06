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
    <div className="flex flex-col gap-4">
      {label && <label className="text-xl ">{label}</label>}
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
