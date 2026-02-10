/*
 * CalendarMonth Component
 *
 * @param value - 선택된 날짜
 * @param onChange - 날짜 선택 핸들러
 * @param className - 추가 스타일 (가장 바깥쪽 컨테이너에 적용됨)
 *
 * [V] 스타일 적용 방식
 * [V] 스타일 코드 위치
 * [V] main props 타입 정의 (children X, props O)
 */

import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type CalendarProps = {
  value: Date;
  onChange: (date: Date) => void;
  disableDates: Date[];
  className?: string;
};

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const Calendar = ({ value, onChange, disableDates, className }: CalendarProps) => {
  // 현재 보고 있는 달(헤더에 표시되는 달)
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(value));

  const mergedStyle = twMerge(CalendarStyle.base, className ? className : '');

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth(); // 0-based

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const prefixBlanks = firstDay.getDay(); // 0(일)~6(토)
    const totalDays = lastDay.getDate();

    return { prefixBlanks, totalDays };
  }, [year, month]);

  const handlePrevMonth = () => setViewMonth((prev) => addMonths(prev, -1));
  const handleNextMonth = () => setViewMonth((prev) => addMonths(prev, 1));

  return (
    <div className={mergedStyle}>
      {/* header */}
      <div className="px-8 pt-6">
        <div className="flex items-center justify-between">
          <button type="button" className={CalendarStyle.navBtn} onClick={handlePrevMonth}>
            {'<'}
          </button>

          <div className="text-lg font-semibold text-gray-900">
            {year}년 {month + 1}월
          </div>

          <button type="button" className={CalendarStyle.navBtn} onClick={handleNextMonth}>
            {'>'}
          </button>
        </div>

        {/* weekdays */}
        <div className="mt-6 grid grid-cols-7 text-center">
          {WEEKDAYS.map((w, idx) => (
            <div
              key={w}
              className={twMerge(
                CalendarStyle.weekday,
                (idx === 0 || idx === 6) && CalendarStyle.weekendText
              )}
            >
              {w}
            </div>
          ))}
        </div>
      </div>

      {/* days grid */}
      <div className="px-8 pt-3 pb-8">
        <div className="grid grid-cols-7 justify-items-center text-center">
          {/* blanks */}
          {Array.from({ length: days.prefixBlanks }).map((_, i) => (
            <div key={`blank-${i}`} className="h-10" />
          ))}

          {/* day cells */}
          {Array.from({ length: days.totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const cellDate = new Date(year, month, dayNum);

            const isDisabled = disableDates.some((disableDate) => isSameDay(disableDate, cellDate));
            console.log(cellDate, isDisabled);
            const isSelected = isSameDay(cellDate, value);
            const dayOfWeek = cellDate.getDay(); // 0 일, 6 토
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            return (
              <button
                key={dayNum}
                type="button"
                onClick={() => onChange(cellDate)}
                disabled={isDisabled}
                className={twMerge(
                  CalendarStyle.dayBtn,
                  isDisabled ? CalendarStyle.disabledDayBtn : CalendarStyle.activeDayHover,
                  isSelected && CalendarStyle.selectedDayBtn
                )}
              >
                <span
                  className={twMerge(
                    CalendarStyle.dayText,
                    isDisabled && CalendarStyle.disabledDayText,
                    isWeekend && CalendarStyle.weekendText,
                    isSelected && CalendarStyle.selectedDayText
                  )}
                >
                  {dayNum}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ---------------- utils ---------------- */

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, diff: number) {
  return new Date(d.getFullYear(), d.getMonth() + diff, 1);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/* ---------------- styles ---------------- */

const CalendarStyle = {
  base: 'w-full max-w-[620px] rounded-2xl border border-gray-200 bg-white shadow-md',
  navBtn: 'h-8 w-8 rounded-full text-gray-500 hover:bg-gray-100 transition-colors',
  weekday: 'py-2 text-sm font-medium text-gray-900',
  weekendText: 'text-red-500',
  dayBtn: 'w-10 h-10 flex items-center justify-center rounded-full',
  dayText: 'text-base text-gray-900',
  activeDayHover: 'hover:bg-gray-100 cursor-pointer',
  disabledDayBtn: 'cursor-not-allowed',
  disabledDayText: 'text-gray-300',
  selectedDayBtn: 'relative',
  selectedDayText:
    'inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffe187] font-semibold text-gray-900',
};
