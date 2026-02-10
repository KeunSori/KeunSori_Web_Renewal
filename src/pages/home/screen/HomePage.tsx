import { useState } from 'react';
import { Calendar } from '../../../shared/component/Calendar/Calendar';
import FormInput from '../../../shared/component/FormInput';

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
    </div>
  );
};

export default HomePage;
