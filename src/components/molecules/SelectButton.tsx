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
        className={`rounded-none border-0 border-l text-2xl first:border-l-0 ${
          selected ? 'border-b-0' : 'border-b'
        }`}
      />
    </>
  );
};

export default SelectButton;
