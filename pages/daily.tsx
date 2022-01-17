import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Grid from '../components/game/grids/Grid';
import Header from '../components/Header';
import clsxm from '@/lib/clsxm';
import { getWordOfTheDay, isWordValid } from '../lib/words';
import { Keyboard } from '@/components/game/keyboard/Keyboard';
import toast from 'react-hot-toast';

const Daily: NextPage = () => {
  const { puzzle, puzzleIndex } = getWordOfTheDay();
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (isGameWon) {
      toast.success('You win', { icon: '👏' });
      // open win modal
    }
  }, [isGameWon]);

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
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
        return setIsGameWon(true);
      }
    }
  };

  return (
    <div
      className={clsxm('px-8 max-w-[520px] min-h-screen mx-auto flex flex-col')}
    >
      <Header />

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
};

export default Daily;
