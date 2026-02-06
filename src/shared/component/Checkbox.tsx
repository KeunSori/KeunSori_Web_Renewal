/*
 * Checkbox Component
 *
 * @param label - 체크박스 옆에 표시할 텍스트
 * @param checked - 체크 여부
 * @param onChange - 체크 상태 변경 핸들러
 * @param variant - 체크박스 variant
 * @param className - 추가 스타일
 *
 * [V] 스타일 적용 방식
 * [V] 스타일 코드 위치
 * [V] main props 타입 정의 (children X, label O)
 */

import { twMerge } from 'tailwind-merge';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: 'primary' | 'secondary' | 'disabled';
  className?: string;
};

export const Checkbox = ({ checked, onChange, variant = 'primary', className }: CheckboxProps) => {
  // 스타일 정의
  const baseWrapperStyle = 'inline-flex items-center gap-2';
  const baseBoxStyle = 'w-5 h-5 rounded border flex items-center justify-center transition-colors';
  const variantStyle = CheckboxStyle[variant];
  const classNameStyle = className ? className : '';

  // 스타일 병합
  const wrapperStyle = twMerge(baseWrapperStyle, classNameStyle);
  const boxStyle = twMerge(baseBoxStyle, variantStyle.box);

  return (
    <label className={wrapperStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={variant === 'disabled'}
        className="hidden"
      />

      <span className={boxStyle}>{checked && <span className={variantStyle.check} />}</span>
    </label>
  );
};

// variant
const CheckboxStyle = {
  primary: {
    box: 'border-gray-400 bg-white cursor-pointer',
    check: 'w-3 h-3 bg-[#ffe187] rounded-xs',
    label: 'text-gray-700 cursor-pointer',
  },
  secondary: {
    box: 'border-gray-300 bg-[#f2f4f0] cursor-pointer',
    check: 'w-3 h-3 bg-gray-400 rounded-xs',
    label: 'text-gray-700 cursor-pointer',
  },
  disabled: {
    box: 'border-gray-200 bg-gray-100 cursor-not-allowed',
    check: 'w-full h-full bg-gray-100 rounded-xs',
    label: 'text-gray-400 cursor-not-allowed',
  },
};
