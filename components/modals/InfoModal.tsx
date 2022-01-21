import { Dialog, Transition } from '@headlessui/react';
import { Cell } from '../game/grids/Cell';
import Modal from './Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function InfoModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog.Title
        as='h3'
        className='text-lg font-bold text-center leading-6 text-gray-900 mb-6'
      >
        Cara Bermain
      </Dialog.Title>

      <div className='text-sm space-y-2'>
        <p>Tebak kata 5 huruf yang tersembunyi dalam 6 percobaan.</p>

        <p>
          Setiap tebakan harus merupakan kata yang valid. Tekan tombol enter
          untuk menebak.
        </p>

        <p>
          Setelah setiap tebakan, setiap huruf dalam tebakan akan memberikan
          petunjuk tentang tebakan kamu.
        </p>
      </div>

      <hr className='my-4' />

      <p className='mb-2'>
        <strong>Contoh</strong>
      </p>

      <div className='mb-4 space-y-2'>
        <div className='flex gap-2'>
          <Cell value='B' state='correct' />
          <Cell value='E' />
          <Cell value='N' />
          <Cell value='A' />
          <Cell value='R' />
        </div>

        <p>
          Huruf B ada di dalam kata yang tersembunyi dan berada di posisi yang
          benar.
        </p>
      </div>

      <div className='mb-4 space-y-2'>
        <div className='flex gap-2'>
          <Cell value='P' />
          <Cell value='E' />
          <Cell value='S' state='present' />
          <Cell value='A' />
          <Cell value='T' />
        </div>

        <p>
          Huruf S ada di dalam kata yang tersembunyi tapi berada di posisi yang
          salah.
        </p>
      </div>

      <div className='mb-4 space-y-2'>
        <div className='flex gap-2'>
          <Cell value='S' />
          <Cell value='A' />
          <Cell value='L' />
          <Cell value='A' />
          <Cell value='H' state='absent' />
        </div>

        <p>Tidak ada huruf H di dalam kata yang tersembunyi tersebut.</p>
      </div>

      <hr className='my-4' />

      <div className='space-y-2'>
        <p>
          Di mode <strong>Daily</strong>, akan ada kata baru setiap harinya
          untuk ditebak. Setelah bermain, kamu bisa share hasil permainan kamu
          ke Twitter.
        </p>
        <p>
          Di mode <strong>Endless</strong>, kamu bisa bermain terus sesukamu
          tanpa harus menunggu hari esok. Setiap permainan akan berisi kata acak
          yang bisa kamu tebak.
        </p>
      </div>
    </Modal>
  );
}
