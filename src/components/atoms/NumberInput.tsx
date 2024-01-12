import { cn } from '@util/cn';
import { InputHTMLAttributes } from 'react';

const NumberInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type='number'
      className={cn(
        'cursor-pointer rounded-lg border border-gray-300 bg-white p-2 text-sm font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600',
        props.className
      )}
    />
  );
};

export default NumberInput;
