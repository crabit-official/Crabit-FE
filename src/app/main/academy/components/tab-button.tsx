import { useRouter } from 'next/navigation';
import { LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

interface ITabButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  path: string;
}

export const TabButton = ({
  icon: Icon,
  label,
  isActive,
  path,
}: ITabButtonProps) => {
  const router = useRouter();

  return (
    <div
      className={cn('flex flex-1 items-center justify-center cursor-pointer')}
      onClick={() => router.push(path)}
    >
      <div className="flex items-center justify-center">
        <Button
          className={cn(
            'size-9 p-2 group-hover:bg-accent/20',
            isActive && 'bg-accent/20'
          )}
          variant="link"
        >
          <Icon
            className={cn(
              'size-5 text-slate-500 group-hover:scale-110 transition-all',
              isActive && 'text-black size-6'
            )}
          />
        </Button>
        <span
          className={cn(
            'hidden md:block text-[17px] text-slate-500',
            isActive && 'text-black font-bold'
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
