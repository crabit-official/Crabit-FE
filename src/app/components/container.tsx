'use client';

import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div
      className="
      mx-auto
      xl:px-20
      md:px-10
      sm:px-2
      px-4
    "
    >
      {children}
    </div>
  );
};

export default Container;
