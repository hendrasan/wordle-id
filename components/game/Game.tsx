import clsxm from '@/lib/clsxm';
import { isWordValid, puzzle } from '@/lib/words';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Grid from './grids/Grid';
import { Keyboard } from './keyboard/Keyboard';

type Props = {
  puzzle: string;
};

export default function Game({ puzzle }: Props) {
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
    <div>
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
