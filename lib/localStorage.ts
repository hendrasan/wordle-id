import { CharState } from './states';

const gameStateKey = 'wid:gameState';

type GameStateProps = {
  guesses: string[];
  evaluations: CharState[][];
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

const endlessBestStreakStateKey = 'wid:endlessBestStreak';

export const saveEndlessStreakStateToLocalStorage = (bestStreak: number) => {
  localStorage.setItem(endlessBestStreakStateKey, JSON.stringify(bestStreak));
};

export const loadEndlessStreakStateFromLocalStorage = () => {
  const state = localStorage.getItem(endlessBestStreakStateKey);
  return state ? (JSON.parse(state) as number) : 0;
};
