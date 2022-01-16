import { Cell } from './Cell';

type Props = {
  guess: string;
};

export function CurrentRow({ guess }: Props) {
  const splitGuess = guess.split('');
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className='flex gap-2'>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}
