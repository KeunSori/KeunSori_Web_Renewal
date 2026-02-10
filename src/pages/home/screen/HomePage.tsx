import { useState } from 'react';
import { Calendar } from '../../../shared/component/calendar/Calendar';
import FormInput from '../../../shared/component/FormInput';
import { ReservationCard } from '../../../shared/component/ReservationCard';

const HomePage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div>HomePage</div>
      <FormInput placeholder="학번" />
      <FormInput placeholder="비밀번호" />
      <FormInput
        placeholder="현재 비밀번호"
        className="h-[40px] w-[170px] text-[14px] focus:border-[1px]"
      />
      <Calendar value={date} onChange={setDate} disableDates={[new Date(2026, 1, 9)]} />
      <ReservationCard
        name="김지상"
        instrumentValue="드럼"
        dateValue="2026년 2월 13일"
        timeValue="16:00 - 17:00"
        confirmState={false}
      />
    </div>
  );
};

export default HomePage;
