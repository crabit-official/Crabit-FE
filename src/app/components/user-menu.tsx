'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';

import Avatar from '@/app/components/avatar';
import MenuItem from '@/app/components/menu-item';

import useRegisterModal from '@/app/hooks/use-register-modal';
import useLoginModal from '@/app/hooks/use-login-modal';

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => router.push('/main/academy/my')}
          className="
          hidden
          md:block
          text-sm
          font-semibold
          py-3
          px-4
          rounded-full
          hover:bg-neutral-100
          transition
          cursor-pointer
          "
        >
          내 학원
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => {
                  loginModal.onOpen();
                  setIsOpen(false);
                }}
                label="로그인"
              />
              <MenuItem
                onClick={() => {
                  registerModal.onOpen();
                  setIsOpen(false);
                }}
                label="회원가입"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
