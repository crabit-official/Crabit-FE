'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer"
      src="/images/logo_light.png"
      alt="Crabit_Logo"
      height="100"
      width="100"
    />
  );
};

export default Logo;
