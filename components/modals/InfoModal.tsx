import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Cell } from '../game/grids/Cell';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export default function InfoModal({ isOpen, handleClose }: Props) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={handleClose}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-4'
          >
            <div className='inline-block w-full max-w-md p-4 md:p-6 m-3 overflow-hidden text-sm text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative'>
              <button
                className='absolute top-3 md:top-5 right-2 h-8 w-8 text-gray-800'
                onClick={handleClose}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  onClick={handleClose}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
              <Dialog.Title
                as='h3'
                className='text-lg font-bold text-center leading-6 text-gray-900 mb-6'
              >
                Cara Bermain
              </Dialog.Title>

              <div className='text-sm space-y-2'>
                <p>Tebak kata 5 huruf yang tersembunyi dalam 6 percobaan.</p>

                <p>
                  Setiap tebakan harus merupakan kata yang valid. Tekan tombol
                  enter untuk menebak.
                </p>

                <p>
                  Setelah setiap tebakan, setiap huruf dalam tebakan akan
                  memberikan petunjuk tentang tebakan kamu.
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
                  Huruf B ada di dalam kata yang tersembunyi dan berada di
                  posisi yang benar.
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
                  Huruf S ada di dalam kata yang tersembunyi tapi berada di
                  posisi yang salah.
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

                <p>
                  Tidak ada huruf H di dalam kata yang tersembunyi tersebut.
                </p>
              </div>

              <hr className='my-4' />

              <div className='space-y-2'>
                <p>
                  Di mode <strong>Daily</strong>, akan ada kata baru setiap
                  harinya untuk ditebak. Setelah bermain, kamu bisa share hasil
                  permainan kamu ke Twitter.
                </p>
                <p>
                  Di mode <strong>Endless</strong>, kamu bisa bermain terus
                  sesukamu tanpa harus menunggu hari esok. Setiap permainan akan
                  berisi kata acak yang bisa kamu tebak.
                </p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
