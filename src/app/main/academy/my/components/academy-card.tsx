import Image from 'next/image';

const AcademyCard = () => {
  return (
    <div className="group cursor-pointer hover:scale-105 relative m-auto flex h-full min-h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] border border-border-primary bg-white bg-opacity-90 p-4 shadow-[0_12px_20px_-6px_rgba(0,0,0,0.15)]">
      <div className="w-full flex items-center">
        <div className="cursor-pointer rounded-2xl hover:scale-95 bg-white bg-opacity-90 p-1 shadow-[0_12px_20px_-6px_rgba(0,0,0,0.15)]">
          <Image
            className="w-[75px] h-[75px]"
            src={'/images/logo_app.png'}
            alt={'로고'}
            width={75}
            height={75}
          />
        </div>
        <h1 className="ml-2 flex-1 text-2xl font-roboto text-ellipsis truncate">
          Craft Your Habit 크래빗 크래빗
        </h1>
      </div>
      <div className="flex-1">
        <p className="mt-5 overflow-hidden line-clamp-6">
          안녕하세요 야호 고구마 안녕하세요 야호 고구마안녕하세요 야호
          고구마안녕하세요 야호 고구마안녕하세요 야호 고구마안녕하세요 야호
          고구마안녕하세요 야호 고구마안녕하세요 야호 고구마안녕하세요 야호
          고구마안녕하세요 야호 고구마안녕하세요 야호 고구마안녕하세요 야호
          고구마안녕하세요 야호 고구마안녕하세요 야호 고구마안녕하세요 야호
          고구마안녕하세요 야호 고구마안녕하세요 야호 고구마안녕하세요 야호
        </p>
      </div>
    </div>
  );
};

export default AcademyCard;
