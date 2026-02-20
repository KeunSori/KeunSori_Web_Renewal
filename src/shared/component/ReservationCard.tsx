/*
 * ReservationCard Component
 *
 * @param name - 회원 이름
 * @param instrumentLabel - "악기" 같은 라벨 텍스트
 * @param instrumentValue - "보컬" 같은 값 텍스트
 * @param dateLabel - "날짜"
 * @param dateValue - "2025년 3월 7일"
 * @param timeLabel - "시간"
 * @param timeValue - "16:00 - 17:00"
 * @param confirmState - 예약 상태 (ex. "예약 완료")
 * @param onCancel - "예약 취소" 클릭 핸들러
 * @param className - 추가 스타일
 *
 * [V] 스타일 적용 방식
 * [V] 스타일 코드 위치
 * [V] main props 타입 정의 (children X, props O)
 */

import { twMerge } from 'tailwind-merge';

type ReservationCardProps = {
  name: string;

  instrumentLabel?: string;
  instrumentValue: string;

  dateLabel?: string;
  dateValue: string;

  timeLabel?: string;
  timeValue: string;

  confirmState: boolean;

  onCancel?: () => void;

  className?: string;
};

export const ReservationCard = ({
  name,
  instrumentLabel = '악기',
  instrumentValue,
  dateLabel = '날짜',
  dateValue,
  timeLabel = '시간',
  timeValue,
  confirmState,
  onCancel,
  className,
}: ReservationCardProps) => {
  // 스타일 정의
  const baseStyle = 'w-full max-w-[400px] rounded-2xl border border-gray-200 bg-white shadow-md';
  const classNameStyle = className ? className : '';

  const mergedStyle = twMerge(baseStyle, classNameStyle);

  const confirmLabel = confirmState ? '예약 완료' : '예약 대기';

  return (
    <div className={mergedStyle}>
      <div className="px-8 pt-6 pb-4">
        {/* 예약자명 */}
        <div className="text-xl font-extrabold text-gray-900">{name}</div>

        {/* 악기 */}
        <div className="mt-6">
          <div className={TextStyle.label}>{instrumentLabel}</div>
          <div className={TextStyle.valueStrong}>{instrumentValue}</div>
        </div>

        {/* 날짜/시간 */}
        <div className="mt-6 grid grid-cols-2 gap-10">
          <div>
            <div className={TextStyle.label}>{dateLabel}</div>
            <div className={TextStyle.value}>{dateValue}</div>
          </div>

          <div>
            <div className={TextStyle.label}>{timeLabel}</div>
            <div className={TextStyle.value}>{timeValue}</div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mx-4 border-t border-gray-200" />

      {/* 하단 액션 */}
      <div className="flex items-center justify-between px-8 py-5">
        <div
          className={twMerge(
            ConfirmStateStyle.base,
            confirmState ? ConfirmStateStyle.confirm : ConfirmStateStyle.pending
          )}
        >
          {confirmLabel}
        </div>

        <button
          type="button"
          className={twMerge(ActionStyle.base, ActionStyle.cancel)}
          onClick={onCancel}
        >
          예약 취소
        </button>
      </div>
    </div>
  );
};

// 텍스트 스타일
const TextStyle = {
  label: 'text-sm text-gray-400',
  value: 'text-md font-semibold text-gray-900',
  valueStrong: 'text-md font-extrabold text-gray-900',
};

// 하단 액션 스타일
const ActionStyle = {
  base: 'text-md font-semibold transition-colors cursor-pointer',
  confirm: 'text-green-500 hover:text-green-600',
  cancel: 'text-gray-300 hover:text-gray-400',
};

// 하단 스타일
const ConfirmStateStyle = {
  base: 'text-md font-semibold cursor-default',
  confirm: 'text-green-500',
  pending: 'text-gray-300',
};
