import { twMerge } from 'tailwind-merge';

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
