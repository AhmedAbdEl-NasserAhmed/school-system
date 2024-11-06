"use client";

const Button = ({
  className,
  children,
  type,
  disabled,
  onClick
}: {
  className?: string;
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
