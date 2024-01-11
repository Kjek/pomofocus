import useInterval from '@hook/useInterval';
import useToggle from '@hook/useToggle';
import { useCallback, useRef, useState } from 'react';

export enum TimerStatus {
  STOPPED,
  PLAYING,
  RESUME,
}

const useTimer = (
  countdownTime: number = 1500000
): {
  toggleTimer: () => void;
  formatedTime: string;
  status: TimerStatus;
  setTimer: (newTime: number) => void;
  time: number;
} => {
  const [isRunning, toggleRunning] = useToggle(false);
  const [time, setTime] = useState<number>(countdownTime);
  const originalTime = useRef<number>(time);

  const toggleTimer = useCallback(() => {
    if (time > 0) {
      toggleRunning();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const setTimer = useCallback(
    (newTime: number) => {
      setTime(newTime);
      originalTime.current = newTime;
      if (isRunning) {
        toggleRunning();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isRunning]
  );

  useInterval(
    () => {
      setTime(time - 1000);
      if (time <= 1000) {
        toggleRunning();
      }
    },
    isRunning && time > 0 ? 1000 : null
  );

  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    second: '2-digit',
  };

  return {
    toggleTimer,
    formatedTime: new Date(time).toLocaleString('en-US', options),
    status: isRunning
      ? TimerStatus.PLAYING
      : time === originalTime.current || time === 0
        ? TimerStatus.STOPPED
        : TimerStatus.RESUME,
    setTimer,
    time,
  };
};

export default useTimer;
