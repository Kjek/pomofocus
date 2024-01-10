import { useReducer } from 'react';

export interface PomodoroState {
  intervalType: string;
  intervalCount: number;
}

export type Action<T> = { type: 'focus'; payload: T } | { type: 'break' };

const initialState: PomodoroState = {
  intervalType: 'focus',
  intervalCount: 1,
};

const usePomodoroInterval = () => {
  const stateReducer = (
    state: PomodoroState,
    action: Action<number>
  ): PomodoroState => {
    switch (action.type) {
      case 'focus':
        return {
          ...state,
          intervalType: action.type,
          intervalCount: action.payload,
        };
      case 'break':
        return {
          ...state,
          intervalType: action.type,
        };
      default:
        return {
          ...state,
        };
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  return { state, dispatch };
};

export default usePomodoroInterval;
