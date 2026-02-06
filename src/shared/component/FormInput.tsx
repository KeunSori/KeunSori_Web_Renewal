import { twMerge } from 'tailwind-merge';

/**
 * @param placeholder 입력 필드의 플레이스홀더 텍스트
 * @param className 추가 스타일 클래스
 */

interface FormInputProps {
  placeholder?: string;
  className?: string;
}

const FormInput = ({ placeholder, className }: FormInputProps) => {
  return (
    <input
      type="text"
      className={twMerge(
        'h-[60px] w-[400px] rounded-[20px] bg-[#F1F1F1] px-[20px] text-[18px] placeholder:text-[#808080] focus:border-[2px] focus:border-[#ffc927] focus:bg-white focus:outline-none',
        className
      )}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
