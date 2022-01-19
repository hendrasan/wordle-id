import {
  FIVELETTERPUZZLES,
  FIVELETTERVALIDGUESSES,
} from '../constants/wordlist';
import { CharState } from './states';

export const isWordValid = (word: string) => {
  return (
    FIVELETTERPUZZLES.includes(word.toLowerCase()) ||
    FIVELETTERVALIDGUESSES.includes(word.toLowerCase())
  );
};

export const getWordOfTheDay = () => {
  const epochMs = 1641013200000;
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);

  return {
    puzzle: FIVELETTERPUZZLES[index].toUpperCase(),
    puzzleIndex: index,
  };
};

export const getRandomWord = () => {
  const index = Math.floor(Math.random() * FIVELETTERPUZZLES.length);

  return {
    puzzle: FIVELETTERPUZZLES[index].toUpperCase(),
    puzzleIndex: index,
  };
};

export const evaluateGuess = (guess: string, solution: string): CharState[] => {
  const splitGuess = guess.split('');
  const splitSolution = solution.split('');

  const solutionCharsSolved = splitSolution.map(() => false);

  const states: CharState[] = Array.from(Array(guess.length));

  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      states[i] = 'correct';
      solutionCharsSolved[i] = true;
      return;
    }
  });

  splitGuess.forEach((letter, i) => {
    if (states[i]) return;

    if (!splitSolution.includes(letter)) {
      states[i] = 'absent';
      return;
    }

    const indexOfPresentChars = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsSolved[index]
    );

    if (indexOfPresentChars > -1) {
      states[i] = 'present';
      solutionCharsSolved[indexOfPresentChars] = true;
      return;
    } else {
      states[i] = 'absent';
      return;
    }
  });

  return states;
};

export const { puzzle, puzzleIndex } = getWordOfTheDay();
