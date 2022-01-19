import clsxm from '@/lib/clsxm';
import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsxm(
        'px-4 md:px-8 max-w-[520px] min-h-screen mx-auto flex flex-col'
      )}
    >
      {children}
    </div>
  );
}
