import { useRef } from "react";

type InputProps = {
  icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className=" flex flex-row items-center px-[.75rem] py-[.5rem] gap-2.5 bg-black rounded-base border-4 border-white shadow-shadow w-full h-[2.75rem]">
      {icon}
      <div className="w-[2px] rounded-base h-5 bg-white"></div>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        className="h-full text-white bg-black font-normal w-full focus:outline-none placeholder:text-white"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
