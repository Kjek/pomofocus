import useInterval from '@hook/useInterval';
import useToggle from '@hook/useToggle';
import { useCallback, useRef, useState } from 'react';

const useTimer = (
  countdownTime: number = 1500000
): {
  toggleTimer: () => void;
  formatedTime: string;
  status: 0 | 1 | 2;
  time: React.MutableRefObject<number>;
} => {
  const [isRunning, toggleIsRunning] = useToggle(false);
  const time = useRef<number>(countdownTime);
  const [timer, setTimer] = useState<Date>(new Date(time.current));

  const toggleTimer = useCallback(() => {
    if (time.current > 0) {
      toggleIsRunning();
    }
  }, []);

  useInterval(
    () => {
      time.current = time.current - 1000;
      setTimer(new Date(time.current));
      if (time.current <= 0) {
        toggleIsRunning();
      }
    },
    isRunning && time.current > 0 ? 1000 : null
  );

  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    second: '2-digit',
  };

  return {
    toggleTimer,
    formatedTime: timer.toLocaleString('en-US', options),
    status: isRunning ? 1 : time.current === countdownTime ? 0 : 2,
    time,
  };
};

export default useTimer;
