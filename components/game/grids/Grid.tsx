import clsxm from "@/lib/clsxm";
import { Cell } from "./Cell";

type GridProps = {
  guesses: string[];
  currentGuess: string;
};

export default function Grid({ guesses, currentGuess }: GridProps) {
  const empties = Array.from(Array(6));
  return (
    <div className={clsxm("flex gap-x-2")}>
      {empties.map((_, i) => (
        <Cell key={i} value="W" state="correct" />
      ))}
    </div>
  );
}
