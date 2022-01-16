import { Cell } from './Cell';

type Props = {
  guess: string;
};

export function CompletedRow({ guess }: Props) {
  const splitGuess = guess.split('');

  return (
    <div className='flex gap-2'>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} state='absent' />
      ))}
    </div>
  );
}
