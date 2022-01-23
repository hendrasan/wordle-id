import { CharState } from '@/lib/states';
import { Cell } from './Cell';

type Props = {
  guess?: string;
  evaluation?: CharState[];
  puzzle?: string;
};

export function Row({ guess, evaluation, puzzle }: Props) {
  const splitGuess = guess ? guess.split('') : [];
  const splitEvaluation = evaluation ? evaluation : [];
  const emptyCells = Array.from(Array(5));

  return (
    <div className='flex gap-2'>
      {emptyCells.map((_, i) => (
        <Cell key={i} value={splitGuess[i]} state={splitEvaluation[i]} />
      ))}
    </div>
  );
}
