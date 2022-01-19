import type { NextPage } from 'next';
import Header from '../components/Header';
import { getWordOfTheDay, isWordValid } from '../lib/words';
import Game from '@/components/game/Game';

const Daily: NextPage = () => {
  const { puzzle, puzzleIndex } = getWordOfTheDay();

  return (
    <>
      <Header />

      <Game puzzle={puzzle} />
    </>
  );
};

export default Daily;
