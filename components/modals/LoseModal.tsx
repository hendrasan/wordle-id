import { CharState } from '@/lib/states';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';
import { Cell } from '../game/grids/Cell';
import Modal from './Modal';
import ModalShareSection from './ModalShareSection';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  puzzle?: string;
  puzzleIndex?: number;
  guesses: string[];
  evaluations?: CharState[][];
};

export default function InfoModal({
  isOpen,
  onClose,
  puzzle,
  guesses,
  evaluations,
  puzzleIndex,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='text-md space-y-2'>
        <h2 className='text-center text-lg font-bold mb-5'>Sayang Sekali!</h2>

        <p>
          Kamu gagal menebak kata <strong>{puzzle}</strong>
        </p>

        <p>Berikut kronologi tebakan kamu.</p>

        <ModalShareSection
          guesses={guesses}
          puzzle={puzzle}
          puzzleIndex={puzzleIndex}
          evaluations={evaluations}
        />
      </div>
    </Modal>
  );
}
