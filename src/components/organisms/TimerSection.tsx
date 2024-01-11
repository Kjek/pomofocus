import Text from '@atom/Text';
import usePomodoroInterval from '@hook/usePomodoroInterval';
import useTimer, { TimerStatus } from '@hook/useTimer';
import NextButton from '@molecule/NextButton';
import PlayPauseResumeButton from '@molecule/PlayPauseResumeButton';
import TimerSelectionSection from '@molecule/TimerSelectionSection';
import minutesToMiliseconds from '@util/minutesToMiliseconds';
import { useCallback, useEffect } from 'react';

const TimerSection = () => {
  const { toggleTimer, formatedTime, status, setTimer, time } = useTimer();
  const { state, dispatch } = usePomodoroInterval();

  const handleInterval = useCallback(() => {
    if (state.intervalType !== 'focus') {
      dispatch({ type: 'focus', payload: state.intervalCount + 1 });
    } else if (state.intervalCount % 4 === 0) {
      dispatch({ type: 'long break' });
    } else {
      dispatch({ type: 'short break' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (status === TimerStatus.STOPPED && time <= 0) {
      handleInterval();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, time]);

  useEffect(() => {
    switch (state.intervalType) {
      case 'short break':
        setTimer(minutesToMiliseconds(5));
        break;
      case 'long break':
        setTimer(minutesToMiliseconds(15));
        break;
      case 'focus':
      default:
        setTimer(minutesToMiliseconds(25));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className='dark:bg-gray-custom m-auto flex w-fit flex-col gap-2 rounded-lg border border-gray-300 bg-white pb-6 dark:border-gray-600'>
      <TimerSelectionSection state={state} dispatch={dispatch} />
      <Text variant='h1' className='text-center'>
        {formatedTime}
      </Text>
      <Text className='text-center'>{`#${state.intervalCount}`}</Text>
      <div className='m-auto flex gap-2'>
        <PlayPauseResumeButton status={status} onClick={toggleTimer} />
        <NextButton onClick={handleInterval} />
      </div>
    </div>
  );
};

export default TimerSection;
