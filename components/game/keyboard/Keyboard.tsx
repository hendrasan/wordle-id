import { CharValue, KeyValue } from '@/lib/keyboard';
import { useEffect } from 'react';
import { Key } from './Key';

type Props = {
  guesses: string[];
  onEnter: () => void;
  onDelete: () => void;
  onChar: (value: string) => void;
};

export function Keyboard({ guesses, onEnter, onDelete, onChar }: Props) {
  // check guesses, show state of each key based on the guesses
  const onClick = (value: KeyValue) => {
    if (value == 'ENTER') {
      onEnter();
    } else if (value == 'DELETE') {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code == 'Enter') {
        onEnter();
      } else if (e.code == 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key);
        }
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [onChar, onDelete, onEnter]);

  return (
    <>
      <div className='flex justify-center mb-2 space-x-1'>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((char, i) => (
          <Key key={i} value={char as CharValue} onClick={onClick} />
        ))}
      </div>

      <div className='flex justify-center mb-2 space-x-1'>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((char, i) => (
          <Key key={i} value={char as CharValue} onClick={onClick} />
        ))}
      </div>

      <div className='flex justify-center mb-2 space-x-1'>
        <Key
          value='ENTER'
          onClick={onClick}
          classnames='text-xs min-w-[70px]'
        />
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((char, i) => (
          <Key key={i} value={char as CharValue} onClick={onClick} />
        ))}
        <Key value='DELETE' onClick={onClick} classnames='min-w-[50px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z'
            />
          </svg>
        </Key>
      </div>
    </>
  );
}
