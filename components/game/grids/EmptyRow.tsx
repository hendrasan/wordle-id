import { Cell } from './Cell';

export function EmptyRow() {
  const emptyCells = Array.from(Array(5));
  return (
    <div className='flex gap-2'>
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}
