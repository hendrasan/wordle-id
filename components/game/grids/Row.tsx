import { evaluateGuess } from '@/lib/words';
import { Cell } from './Cell';

type Props = {
  guess?: string;
  puzzle?: string;
};

export function Row({ guess, puzzle }: Props) {
  const splitGuess = guess ? guess.split('') : [];
  const emptyCells = Array.from(Array(5));

  if (guess && puzzle) {
    const evaluations = evaluateGuess(guess, puzzle);
    console.log(evaluations);
  }

  return (
    <div className='flex gap-2'>
      {emptyCells.map((_, i) => (
        <Cell key={i} value={splitGuess[i]} />
      ))}
    </div>
  );
}
