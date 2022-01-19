import type { NextPage } from 'next';
import Header from '../components/Header';
import { getRandomWord } from '../lib/words';
import Game from '@/components/game/Game';

const Endless: NextPage = () => {
  const { puzzle, puzzleIndex } = getRandomWord();

  return (
    <>
      <Header title='Endless Mode' />

      <Game puzzle={puzzle} />
    </>
  );
};

export default Endless;
