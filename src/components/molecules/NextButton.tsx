import Button from '@atom/Button';
import { TrackNextIcon } from '@radix-ui/react-icons';
import type { ButtonHTMLAttributes } from 'react';

const NextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <Button {...props}>
        <TrackNextIcon className='h-6 w-6' />
      </Button>
    </>
  );
};

export default NextButton;
