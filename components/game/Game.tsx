import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from '@/lib/localStorage';
import {
  evaluateGuess,
  getRandomWord,
  getWordOfTheDay,
  isWordValid,
} from '@/lib/words';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Header from '../Header';
import LoseModal from '../modals/LoseModal';
import WinModal from '../modals/WinModal';
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
  const [evaluations, setEvaluations] = useState<string[][]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [isWinModalShown, setIsWinModalShown] = useState(false);
  const [isLoseModalShown, setIsLoseModalShown] = useState(false);

  useEffect(() => {
    if (mode === 'daily') {
      const gameState = loadGameStateFromLocalStorage();
      setGuesses(gameState.guesses);
      setEvaluations(gameState.evaluations);
      if (gameState.gameStatus === 'WIN') {
        setIsGameWon(true);
        setIsGameLost(false);
        setIsGameComplete(true);
      } else if (gameState.gameStatus === 'LOSE') {
        setIsGameWon(false);
        setIsGameLost(true);
        setIsGameComplete(true);
      }
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'daily') {
      const gameState = loadGameStateFromLocalStorage();

      let gameStatus = gameState.gameStatus;
      if (isGameWon) gameStatus = 'WIN';
      if (isGameLost) gameStatus = 'LOSE';

      saveGameStateToLocalStorage({
        ...gameState,
        guesses,
        evaluations,
        lastCompleted: isGameWon ? Date.now() : null,
        gameStatus: gameStatus,
      });
    }
  }, [guesses, evaluations, isGameWon, isGameLost, mode]);

  useEffect(() => {
    if (mode === 'daily') {
      let { puzzle, puzzleIndex } = getWordOfTheDay();
      setPuzzle(puzzle);
      setPuzzleIndex(puzzleIndex);

      const gameState = loadGameStateFromLocalStorage();
      if (puzzle !== gameState.puzzle) {
        saveGameStateToLocalStorage({
          ...gameState,
          gameStatus: 'PLAYING',
          puzzle,
          lastPlayed: Date.now(),
        });
      }
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
    setIsWinModalShown(false);
    setGuesses([]);
    setCurrentGuess('');
    setPuzzle(puzzle);
    setPuzzleIndex(puzzleIndex);
  };

  useEffect(() => {
    if (isGameComplete) {
      if (mode === 'daily') {
        if (isGameWon) {
          setTimeout(() => {
            setIsWinModalShown(true);
          }, 300);
        } else if (isGameLost) {
          setTimeout(() => {
            setIsLoseModalShown(true);
          }, 300);
        }
      }

      if (mode === 'endless') {
        if (isGameWon) {
          toast('Kamu benar!', { icon: '👏' });
        } else if (isGameLost) {
          toast('Kamu salah. Jawabannya: ' + puzzle, {
            icon: '😭',
          });
        }

        setTimeout(() => {
          newGame();
          toast('Lanjut! Tebak kata ini');
        }, 2000);
      }
    }
  }, [isGameComplete, isGameLost, isGameWon, mode, puzzle]);

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

    // evaluate the guess
    if (currentGuess.length < 5) {
      return toast.error('Jawaban belum cukup panjang');
    }

    if (!isWordValid(currentGuess)) {
      return toast.error('Kata tidak valid');
    }

    if (!isGameWon && currentGuess.length == 5 && guesses.length < 6) {
      setGuesses([...guesses, currentGuess]);
      // evaluate the guess then update evaluations state
      setEvaluations([...evaluations, evaluateGuess(currentGuess, puzzle)]);
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

      <WinModal
        isOpen={isWinModalShown}
        onClose={() => setIsWinModalShown(false)}
        puzzle={puzzle}
        guesses={guesses}
        evaluations={evaluations}
        puzzleIndex={puzzleIndex}
      />

      <LoseModal
        isOpen={isLoseModalShown}
        onClose={() => setIsLoseModalShown(false)}
        puzzle={puzzle}
        guesses={guesses}
        evaluations={evaluations}
        puzzleIndex={puzzleIndex}
      />
    </div>
  );
}
