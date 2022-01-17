import { CharState } from '@/lib/states';
import { evaluateGuess } from '@/lib/words';
import { useEffect, useState } from 'react';
import { Cell } from './Cell';

type Props = {
  guess: string;
  puzzle: string;
};

export function CompletedRow({ guess, puzzle }: Props) {
  const [evaluations, setEvaluations] = useState<CharState[]>([]);
  const splitGuess = guess ? guess.split('') : [];

  useEffect(() => {
    const ev = evaluateGuess(guess, puzzle);
    setEvaluations(ev);
  }, [guess, puzzle]);

  return (
    <div className='flex gap-2'>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} state={evaluations[i]} />
      ))}
    </div>
  );
}
