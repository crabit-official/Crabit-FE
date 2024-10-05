import Container from '@/app/components/container';
import EnrollForm from '@/app/space/enroll/components/enroll-form';
import Heading from '@/app/components/ui/heading';

const SpaceEnrollPage = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-bold text-3xl mb-3">학원 등록 페이지</h1>
        <Heading
          title="Crabit에 오신 것을 환영합니다."
          subTitle="학원을 등록해주세요!"
        />
        <EnrollForm />
      </div>
    </Container>
  );
};

export default SpaceEnrollPage;
