import clsxm from '@/lib/clsxm';
import {
  getRandomWord,
  getWordOfTheDay,
  isWordValid,
  puzzle,
} from '@/lib/words';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Header from '../Header';
import Grid from './grids/Grid';
import { Keyboard } from './keyboard/Keyboard';

type Props = {
  // puzzle: string;
  mode?: string;
};

export default function Game({ mode = 'daily' }: Props) {
  const modeLabel =
    mode === 'daily' ? 'Daily' : mode === 'endless' ? 'Endless Mode' : '';
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);

  useEffect(() => {
    if (mode === 'daily') {
      let { puzzle, puzzleIndex } = getWordOfTheDay();
      setPuzzle(puzzle);
      setPuzzleIndex(puzzleIndex);
    } else if (mode === 'endless') {
      const { puzzle, puzzleIndex } = getRandomWord();

      setPuzzle(puzzle);
      setPuzzleIndex(puzzleIndex);
    }
  }, [mode]);

  const newGame = () => {
    const { puzzle, puzzleIndex } = getRandomWord();

    setIsGameComplete(false);
    setIsGameWon(false);
    setIsGameLost(false);
    setGuesses([]);
    setCurrentGuess('');
    setPuzzle(puzzle);
    setPuzzleIndex(puzzleIndex);
  };

  useEffect(() => {
    if (isGameComplete) {
      if (isGameWon) {
        toast.success('Kamu menang', { icon: '👏' });
        // open win modal
        // if endless mode, show play again button
      } else if (isGameLost) {
        toast.success('Kamu kalah', { icon: '😭' });
      }

      if (mode === 'endless') {
        setTimeout(() => {
          newGame();
          toast('Lanjut! Tebak kata ini');
        }, 2000);
      }
    }
  }, [isGameComplete, isGameLost, isGameWon, mode]);

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    if (isGameComplete) {
      return;
    }

    // check if word is valid
    if (currentGuess.length < 5) {
      return toast.error('Jawaban belum cukup panjang');
    }

    if (!isWordValid(currentGuess)) {
      return toast.error('Kata tidak valid');
    }

    if (!isGameWon && currentGuess.length == 5 && guesses.length < 6) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');

      if (currentGuess == puzzle) {
        setIsGameWon(true);
        setIsGameLost(false);
        setIsGameComplete(true);
        return;
      }

      if (guesses.length >= 5) {
        setIsGameWon(false);
        setIsGameLost(true);
        setIsGameComplete(true);
      }
    }
  };

  return (
    <div>
      <Header title={modeLabel} />

      <Grid guesses={guesses} currentGuess={currentGuess} puzzle={puzzle} />

      <Keyboard
        guesses={guesses}
        puzzle={puzzle}
        isGameWon={isGameWon}
        onEnter={onEnter}
        onDelete={onDelete}
        onChar={onChar}
      />
    </div>
  );
}
