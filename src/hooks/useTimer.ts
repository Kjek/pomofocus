import { useCallback, useRef, useState } from 'react';

const useTimer = () => {
  const timerInterval = useRef<NodeJS.Timeout>();
  const time = useRef<number>(1500000);
  const [timer, setTimer] = useState<Date>(new Date(time.current));

  const toggleTimer = useCallback(() => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = undefined;
    } else {
      timerInterval.current = setInterval(() => {
        time.current = time.current - 1000;
        setTimer(new Date(time.current));
      }, 1000);
    }
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    second: '2-digit',
  };

  return {
    toggleTimer,
    formatedTime: timer.toLocaleString('en-US', options),
    time,
  };
};

export default useTimer;
