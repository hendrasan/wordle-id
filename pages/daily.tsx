import type { NextPage } from 'next';
import Game from '@/components/game/Game';

const Daily: NextPage = () => {
  return (
    <>
      <Game mode='daily' />
    </>
  );
};

export default Daily;
