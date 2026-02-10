import FormInput from '../../../shared/component/FormInput';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>HomePage</div>
      <FormInput placeholder="학번" />
      <FormInput placeholder="비밀번호" />
      <FormInput
        placeholder="현재 비밀번호"
        className="h-[40px] w-[170px] text-[14px] focus:border-[1px]"
      />
    </div>
  );
};

export default HomePage;
