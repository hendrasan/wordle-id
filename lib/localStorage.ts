const gameStateKey = 'wid:gameState';

type GameStateProps = {
  guesses: string[];
  evaluations: string[][];
  gameStatus: 'PLAYING' | 'WIN' | 'LOSE' | null;
  lastPlayed: number | null;
  lastCompleted: number | null;
  puzzle: string;
};

const initialState: GameStateProps = {
  guesses: [],
  evaluations: [],
  gameStatus: null,
  lastPlayed: null,
  lastCompleted: null,
  puzzle: '',
};

export const saveGameStateToLocalStorage = (gameState: GameStateProps) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey);
  return state ? (JSON.parse(state) as GameStateProps) : initialState;
};
