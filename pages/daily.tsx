import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/Footer';
import Grid from '../components/game/grids/Grid';
import Header from '../components/Header';
import clsxm from '@/lib/clsxm';
import { puzzle, puzzleIndex, isWordValid } from '../lib/words';

const Daily: NextPage = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  return (
    <div
      className={clsxm(
        'px-8 max-w-md min-h-screen justify-between mx-auto flex flex-col'
      )}
    >
      <Header />

      <p>
        Today&apos;s word is: {puzzle} (#{puzzleIndex})
      </p>

      <Grid guesses={guesses} currentGuess={currentGuess} />

      <Footer />
    </div>
  );
};

export default Daily;
