import { twMerge } from 'tailwind-merge';

interface FormInputProps {
  placeholder?: string;
  style?: string;
}

const FormInput = ({ placeholder, style }: FormInputProps) => {
  return (
    <input
      type="text"
      className={twMerge(
        'h-[60px] w-[400px] rounded-[20px] bg-[#F1F1F1] px-[20px] text-[18px] placeholder:text-[#808080] focus:border-[2px] focus:border-[#ffc927] focus:bg-white focus:outline-none',
        style
      )}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
