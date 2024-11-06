const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-400 text-[1.2rem] font-semibold">{message}</p>;
};

export default ErrorMessage;
