import { cn } from '@util/cn';
import type { InputHTMLAttributes } from 'react';

interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputButton = (props: InputButtonProps) => {
  const { className } = props;

  return (
    <>
      <input
        {...props}
        title={props.title}
        className={cn(
          `cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600 ${
            className ?? ''
          }`
        )}
        type='button'
        value={props.value}
      />
    </>
  );
};

export default InputButton;
