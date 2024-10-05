'use client';

import { usePathname } from 'next/navigation';

import { Bell, Home, Settings } from 'lucide-react';

import { TabButton } from '@/app/main/academy/components/tab-button';

function AcademyTab() {
  const pathname = usePathname();

  return (
    <div className="flex justify-around">
      <TabButton
        icon={Home}
        label={'내 학원'}
        isActive={pathname.includes('/main/academy/my')}
        path={'/main/academy/my'}
      />
      <TabButton
        icon={Bell}
        label={'학원 알림'}
        isActive={pathname.includes('/main/academy/alert')}
        path={'/main/academy/alert'}
      />
      <TabButton
        icon={Settings}
        label={'학원 관리'}
        isActive={pathname.includes('/main/academy/setting')}
        path={'/main/academy/setting'}
      />
    </div>
  );
}

export default AcademyTab;
