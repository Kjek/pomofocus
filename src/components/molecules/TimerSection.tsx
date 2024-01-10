import Text from '@atom/Text';
import usePomodoroInterval from '@hook/usePomodoroInterval';
import useTimer from '@hook/useTimer';
import { useCallback, useEffect } from 'react';
import NextButton from './NextButton';
import PlayPauseResumeButton from './PlayPauseResumeButton';

const TimerSection = () => {
  const { toggleTimer, formatedTime, status, time } = useTimer();
  const { state, dispatch } = usePomodoroInterval();

  const handleInterval = useCallback(() => {
    if (state.intervalType === 'focus') {
      dispatch({ type: 'break' });
    } else {
      dispatch({ type: 'focus', payload: state.intervalCount + 1 });
    }
  }, [state]);

  useEffect(() => {
    if (status === 1 && time.current <= 0) {
      handleInterval();
    }
  }, [status]);

  return (
    <div className='m-auto flex w-1/2 flex-col gap-2'>
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
