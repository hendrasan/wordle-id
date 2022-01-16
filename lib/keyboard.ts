import { CharState } from './states';

export type CharValue =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'P'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | 'Z'
  | 'X'
  | 'C'
  | 'V'
  | 'B'
  | 'N'
  | 'M';

export type KeyValue = CharValue | 'ENTER' | 'DELETE';

export const evaluateKeyboardStates = (
  guessses: string[],
  puzzle: string
): { [key: string]: CharState } => {
  const charObj: { [key: string]: CharState } = {};

  guessses.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if (!puzzle.includes(letter)) {
        return (charObj[letter] = 'absent');
      }

      if (letter == puzzle[i]) {
        return (charObj[letter] = 'correct');
      }

      if (charObj[letter] != 'correct') {
        return (charObj[letter] = 'present');
      }
    });
  });

  return charObj;
};
