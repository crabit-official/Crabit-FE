import { AiOutlinePlus } from 'react-icons/ai';

import Heading from '@/app/components/ui/heading';

const AcademyEnrollCard = () => {
  return (
    <div className="group relative m-auto flex h-full min-h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] border border-border-primary bg-white bg-opacity-90 p-1 shadow-[0_12px_20px_-6px_rgba(0,0,0,0.15)]">
      <div className="bg-[#E37A95] mb-5 w-8 h-8 rounded-full flex flex-col items-center justify-center">
        <AiOutlinePlus size="25" />
      </div>
      <Heading
        title="학원 가입하기"
        subTitle="초대코드를 이용하여, 학원을 가입해주세요!"
        center
      />
    </div>
  );
};

export default AcademyEnrollCard;
