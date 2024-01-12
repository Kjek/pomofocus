import InputButton from '@atom/InputButton';
import type { InputHTMLAttributes } from 'react';

interface SelectButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  selected?: boolean;
}

const SelectButton = (props: SelectButtonProps) => {
  const { selected } = props;

  return (
    <>
      <InputButton
        {...props}
        className={`rounded-none border-0 border-l text-base first:rounded-tl-lg first:border-l-0 last:rounded-tr-lg sm:text-2xl ${
          selected ? 'border-b-0' : 'border-b bg-neutral-100 dark:bg-gray-900'
        }`}
      />
    </>
  );
};

export default SelectButton;
