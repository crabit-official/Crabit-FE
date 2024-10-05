import AcademyEnrollCard from '@/app/main/academy/my/components/academy-enroll-card';
import AcademyCard from '@/app/main/academy/my/components/academy-card';

const AcademyList = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AcademyEnrollCard />
        {new Array(10).fill(null).map((_, i) => (
          <AcademyCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default AcademyList;
