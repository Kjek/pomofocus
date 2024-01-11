import { cn } from '@util/cn';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { className } = props;

  return (
    <>
      <button
        {...props}
        className={cn(
          `cursor-pointer rounded-lg border border-gray-300 px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600 ${
            className ?? ''
          }`
        )}
        type='button'
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
