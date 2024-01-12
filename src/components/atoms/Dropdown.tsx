import { DropdownOption } from '@type/DropdownOption';
import { cn } from '@util/cn';
import type { SelectHTMLAttributes } from 'react';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
}

const Dropdown = (props: DropdownProps) => {
  const { options } = props;

  return (
    <select
      {...props}
      className={cn(
        'cursor-pointer rounded-lg border border-gray-300 bg-white p-2 text-sm font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600',
        props.className
      )}
    >
      {options.map((option) => {
        return (
          <option
            value={option.value}
            className=' border-gray-300 text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600'
          >
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
