import clsxm from '@/lib/clsxm';
import { CharValue, KeyValue } from '@/lib/keyboard';
import { CharState } from '@/lib/states';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  value: KeyValue;
  state?: CharState;
  onClick: (value: KeyValue) => void;
  classnames?: string;
};

export function Key({ children, value, state, onClick, classnames }: Props) {
  return (
    <button
      className={clsxm(
        'mx-0.5 md:min-w-[42px] h-[54px] px-2 rounded bg-gray-300 text-gray-900 font-bold flex items-center justify-center',
        [
          state === 'correct' && ['border-green-500 bg-green-500 text-white'],
          state === 'present' && ['border-yellow-500 bg-yellow-500 text-white'],
          state === 'absent' && ['border-gray-700 bg-gray-700 text-white'],
        ],
        classnames
      )}
      onClick={() => onClick(value)}
    >
      {children || value}
    </button>
  );
}
