import { twMerge } from 'tailwind-merge';

/** 악기 박스 컴포넌트
 *
 * @param instrument 악기 이름
 * @param selected 박스 선택 여부
 *
 */

interface InstrumentBoxProps {
  instrument: string;
  selected?: boolean;
}

const InstrumentBox = ({ instrument, selected = false }: InstrumentBoxProps) => {
  return (
    <div
      className={twMerge(
        `w-[60px] rounded-sm border border-black/40 py-[2px]`,
        selected ? 'border-[#FFE493] bg-[#FFE493]' : ''
      )}
    >
      <div className={twMerge('text-center text-sm text-black/40', selected ? 'text-black' : '')}>
        {instrument}
      </div>
    </div>
  );
};

export default InstrumentBox;
