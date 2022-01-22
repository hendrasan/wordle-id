import Link from 'next/link';
import toast from 'react-hot-toast';

type Props = {
  puzzle?: string;
  puzzleIndex?: number;
  guesses: string[];
  evaluations?: string[][];
};

export default function ModalShareSection({
  guesses,
  puzzle,
  puzzleIndex,
  evaluations,
}: Props) {
  const attempt = guesses[guesses.length - 1] === puzzle ? guesses.length : 'X';
  let shareText = `Wordle ID ${puzzleIndex} ${attempt}/6\n\n`;

  evaluations &&
    evaluations.forEach((wordEvaluation, i) => {
      wordEvaluation.forEach((letterEvaluation, j) => {
        switch (letterEvaluation) {
          case 'correct':
            shareText += '🟩';
            break;
          case 'present':
            shareText += '🟨';
            break;
          case 'absent':
            shareText += '⬜';
            break;
        }
      });
      shareText += '\n';
    });
  shareText += `\nhttps://wordle-id.vercel.app`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    toast(
      'Tersalin ke clipboard, kamu bisa paste ke Twitter atau sosial media lain'
    );
  };

  return (
    <>
      {evaluations &&
        evaluations.map((wordEvaluation, i) => (
          <div className='flex flex-row space-x-1' key={i}>
            {wordEvaluation.map((letterEvaluation: any, j) => {
              let square;
              switch (letterEvaluation) {
                case 'correct':
                  square = '🟩';
                  break;
                case 'present':
                  square = '🟨';
                  break;
                case 'absent':
                  square = '⬜';
                  break;
              }
              return <span key={j}>{square}</span>;
            })}
          </div>
        ))}

      <div className='space-x-4 space-y-4 sm:space-y-0 text-center'>
        <button
          className='inline-flex items-center mt-4 border-2 border-gray-900 py-2 px-4 font-bold tracking-wide text-lg transition-colors text-center uppercase hover:bg-green-500 hover:border-green-500 hover:text-white'
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <a
          className='inline-flex items-center mt-4 border-2 border-gray-900 py-2 px-4 font-bold tracking-wide text-lg transition-colors text-center uppercase hover:bg-green-500 hover:border-green-500 hover:text-white'
          href={
            'http://twitter.com/share?text=' + encodeURIComponent(shareText)
          }
          target='_blank'
          rel='noreferrer'
        >
          Share
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
            />
          </svg>
        </a>
      </div>

      <div>
        <hr className='my-4' />
        <p>
          Main lagi dengan kata baru besok atau main tanpa batas di mode{' '}
          <Link href='/endless'>
            <a className='text-green-500 underline underline-offset-2 font-medium'>
              Endless
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}
