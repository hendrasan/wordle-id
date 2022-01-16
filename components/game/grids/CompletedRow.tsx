import { evaluateGuess } from '@/lib/words';
import { Cell } from './Cell';

type Props = {
  guess: string;
  puzzle: string;
};

export function CompletedRow({ guess, puzzle }: Props) {
  const splitGuess = guess ? guess.split('') : [];

  const evaluations = evaluateGuess(guess, puzzle);

  return (
    <div className='flex gap-2'>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} state={evaluations[i]} />
      ))}
    </div>
  );
}
