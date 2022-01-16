import clsxm from '@/lib/clsxm';
import { CompletedRow } from './CompletedRow';
import { CurrentRow } from './CurrentRow';
import { EmptyRow } from './EmptyRow';

type GridProps = {
  guesses: string[];
  currentGuess: string;
};

export default function Grid({ guesses, currentGuess }: GridProps) {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

  return (
    <div className={clsxm('my-4 flex flex-col items-center gap-2')}>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
}
