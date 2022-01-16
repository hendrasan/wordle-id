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

export function Key({ children, value, onClick, classnames }: Props) {
  return (
    <button
      className={clsxm(
        'min-w-[42px] h-[54px] px-2 rounded bg-gray-300 text-gray-900 font-bold flex items-center justify-center',
        classnames
      )}
      onClick={() => onClick(value)}
    >
      {children || value}
    </button>
  );
}
