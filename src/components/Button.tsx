"use client";

const Button = ({
  className,
  children,
  type,
  disabled
}: {
  className: string;
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}) => {
  return (
    <button disabled={disabled} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
