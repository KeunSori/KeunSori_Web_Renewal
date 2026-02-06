import FormInput from '../../../shared/component/FormInput';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>HomePage</div>
      <FormInput placeholder="학번" />
      <FormInput placeholder="비밀번호" />
      <FormInput
        placeholder="현재 비밀번호"
        style="h-[40px] focus:border-[1px] w-[170px] text-[14px]"
      />
    </div>
  );
};

export default HomePage;
