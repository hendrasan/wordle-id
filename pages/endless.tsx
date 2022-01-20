import type { NextPage } from 'next';
import Game from '@/components/game/Game';

const Endless: NextPage = () => {
  return (
    <>
      <Game mode='endless' />
    </>
  );
};

export default Endless;
