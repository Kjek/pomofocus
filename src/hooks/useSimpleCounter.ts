import { useCallback, useState } from 'react';

const useSimpleCounter = (defaultValue: number = 0): [number, () => void] => {
  const [value, setValue] = useState<number>(defaultValue);

  const increment = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  return [value, increment];
};

export default useSimpleCounter;
