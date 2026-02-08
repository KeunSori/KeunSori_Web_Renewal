import { twMerge } from 'tailwind-merge';

/** 악기 박스 컴포넌트
 * @param instrument 악기 이름
 * @param selected 박스 선택 여부
 */

interface InstrumentBoxProps {
  instrument: string;
  selected?: boolean;
}

const InstrumentBox = ({ instrument, selected = false }: InstrumentBoxProps) => {
  return (
    <div
      className={twMerge(
        `w-[60px] rounded-sm border border-brand-gray-light py-[2px]`,
        selected ? 'border-brand-yellow-light bg-brand-yellow-light' : ''
      )}
    >
      <div
        className={twMerge(
          'text-center text-sm text-brand-gray-light',
          selected ? 'text-black' : ''
        )}
      >
        {instrument}
      </div>
    </div>
  );
};

export default InstrumentBox;
