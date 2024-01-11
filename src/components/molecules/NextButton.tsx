import Button from '@atom/Button';
import { TrackNextIcon } from '@radix-ui/react-icons';
import type { ButtonHTMLAttributes } from 'react';

const NextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <Button {...props}>
        <TrackNextIcon className='h-4 w-4 sm:h-6 sm:w-6' />
      </Button>
    </>
  );
};

export default NextButton;
