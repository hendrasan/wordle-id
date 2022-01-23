import { CharState } from '@/lib/states';
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
        <h2 className='text-center text-lg font-bold mb-5'>Kamu Benar!</h2>

        <p>Kamu berhasil menebak dalam {guesses.length} kesempatan</p>

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
