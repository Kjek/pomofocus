import type { Action, PomodoroState } from '@hook/usePomodoroInterval';
import SelectButton from '@molecule/SelectButton';

interface TimerSelectionSectionProps {
  state: PomodoroState;
  dispatch: React.Dispatch<Action<number>>;
}

const TimerSelectionSection = (props: TimerSelectionSectionProps) => {
  const { state, dispatch } = props;

  return (
    <div className='flex'>
      <SelectButton
        value={'Pomodoro'}
        selected={state.intervalType === 'focus'}
        onClick={() =>
          dispatch({ type: 'focus', payload: state.intervalCount })
        }
      />
      <SelectButton
        value={'Short break'}
        selected={state.intervalType === 'short break'}
        onClick={() => dispatch({ type: 'short break' })}
      />
      <SelectButton
        value={'Long break'}
        selected={state.intervalType === 'long break'}
        onClick={() => dispatch({ type: 'long break' })}
      />
    </div>
  );
};

export default TimerSelectionSection;
