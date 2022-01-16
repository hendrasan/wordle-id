import {
  FIVELETTERPUZZLES,
  FIVELETTERVALIDGUESSES,
} from "../constants/wordlist";

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

export const { puzzle, puzzleIndex } = getWordOfTheDay();
