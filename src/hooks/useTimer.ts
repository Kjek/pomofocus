import { useCallback, useRef, useState } from 'react';
import { useToggle } from './useToggle';

const useTimer = () => {
  const [value, toggle] = useToggle(false);
  const timerInterval = useRef<NodeJS.Timeout>();
  const time = useRef<number>(1500000);
  const [timer, setTimer] = useState<Date>(new Date(time.current));

  const toggleTimer = useCallback(() => {
    if (value) {
      clearInterval(timerInterval.current);
    } else {
      timerInterval.current = setInterval(() => {
        time.current = time.current - 1000;
        setTimer(new Date(time.current));
      }, 1000);
    }
    toggle();
  }, [value]);

  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    second: '2-digit',
  };

  return {
    toggleTimer,
    formatedTime: timer.toLocaleString('en-US', options),
    status: value ? 'Pause' : 'Play',
    time,
  };
};

export default useTimer;
