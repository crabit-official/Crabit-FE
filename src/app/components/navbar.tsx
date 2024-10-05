'use client';

import Container from '@/app/components/container';
import Logo from '@/app/components/logo';
import UserMenu from '@/app/components/user-menu';

import { useScrollTop } from '@/app/hooks/use-scroll-top';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        'z-50 bg-background fixed top-0 w-full',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-3 md:gap-0">
          <Logo />
          <div className="flex items-center justify-center">
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
