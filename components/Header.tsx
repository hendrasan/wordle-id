import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import { useState } from 'react';
import InfoModal from './modals/InfoModal';

type Props = {
  title?: string;
};

export default function Header({ title }: Props) {
  const [isInfoModalShown, setIsInfoModalShown] = useState(false);

  return (
    <>
      <header
        className={clsxm(
          'py-4 border-b border-b-gray-300 flex justify-center items-center'
        )}
      >
        <h1
          className={clsxm(
            'text-xl mr-auto uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700'
          )}
        >
          <Link href='/'>
            <a>Wordle ID</a>
          </Link>
        </h1>
        {title && (
          <strong className={clsxm('mr-2 uppercase text-yellow-500')}>
            {title}
          </strong>
        )}
        <button onClick={() => setIsInfoModalShown(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </header>

      <InfoModal
        isOpen={isInfoModalShown}
        onClose={() => setIsInfoModalShown(false)}
      />
    </>
  );
}
