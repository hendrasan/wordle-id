import clsxm from '@/lib/clsxm';

clsxm;
type CellProps = {
  value?: string;
  state?: 'absent' | 'present' | 'correct';
};

export function Cell({ value, state }: CellProps) {
  const classNames = clsxm(
    'w-14 h-14 border-2 border-gray-900 text-gray-900 font-bold text-3xl',
    'flex items-center justify-center',
    [
      state === 'correct' && ['border-green-500 bg-green-500 text-white'],
      state === 'present' && ['border-yellow-500 bg-yellow-500 text-white'],
      state === 'absent' && ['border-gray-300 bg-gray-300 text-white'],
    ]
  );

  return (
    <>
      <div className={classNames}>{value}</div>
    </>
  );
}
