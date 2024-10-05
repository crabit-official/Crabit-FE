import { ReactNode } from 'react';

import AcademyTab from '@/app/main/academy/components/academy-tab';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AcademyTab />
      {children}
    </>
  );
}
