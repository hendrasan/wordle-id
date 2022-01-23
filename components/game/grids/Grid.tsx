import clsxm from '@/lib/clsxm';
import { CharState } from '@/lib/states';
import { Row } from './Row';

type GridProps = {
  guesses: string[];
  evaluations: CharState[][];
  currentGuess: string;
  puzzle: string;
};

export default function Grid({
  guesses,
  evaluations,
  currentGuess,
  puzzle,
}: GridProps) {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];
  const currentGuessIndex = guesses.length;

  return (
    <div className={clsxm('my-4 flex flex-col items-center gap-2')}>
      {Array.from(Array(6)).map((row, i) => {
        if (guesses[i]) {
          return <Row key={i} guess={guesses[i]} evaluation={evaluations[i]} />;
        }

        if (currentGuessIndex == i) {
          return <Row key={i} guess={currentGuess} />;
        }

        return <Row key={i} />;
      })}
    </div>
  );
}
