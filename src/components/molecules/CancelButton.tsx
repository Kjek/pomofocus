import Button from '@atom/Button';
import { Cross1Icon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes } from 'react';

const CancelButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} className='self-end border-none p-2'>
      <Cross1Icon className='h-4 w-4 sm:h-6 sm:w-6' />
    </Button>
  );
};

export default CancelButton;
