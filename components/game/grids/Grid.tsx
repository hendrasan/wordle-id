import clsxm from '@/lib/clsxm';
import { CompletedRow } from './CompletedRow';
import { CurrentRow } from './CurrentRow';
import { EmptyRow } from './EmptyRow';
import { Row } from './Row';

type GridProps = {
  guesses: string[];
  currentGuess: string;
  puzzle: string;
};

export default function Grid({ guesses, currentGuess, puzzle }: GridProps) {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];
  const currentGuessIndex = guesses.length;

  return (
    <div className={clsxm('my-4 flex flex-col items-center gap-2')}>
      {/* {Array.from(Array(6)).map((row, i) => {
        if (guesses[i]) {
          return <Row key={i} guess={guesses[i]} puzzle={puzzle} />;
        }

        if (currentGuessIndex == i) {
          return <Row key={i} guess={currentGuess} />;
        }

        return <Row key={i} />;
      })} */}

      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guesses[i]} puzzle={puzzle} />
      ))}
      {guesses.length < 6 && <Row guess={currentGuess} />}
      {empties.map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
}
