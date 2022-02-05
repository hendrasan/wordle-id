export default function Footer() {
  return (
    <footer className='border-t border-t-gray-500 py-4 text-center text-sm'>
      Inspired by{' '}
      <a
        className='text-green-500 underline underline-offset-2 font-medium'
        href='https://www.powerlanguage.co.uk/wordle/'
        target='_blank'
        rel='noreferrer'
      >
        Wordle
      </a>
      . Source code at{' '}
      <a
        className='text-green-500 underline underline-offset-2 font-medium'
        href='https://github.com/hendrasan/wordle-id'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
    </footer>
  );
}
