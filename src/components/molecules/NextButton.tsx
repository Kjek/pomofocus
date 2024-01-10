import Button from '@atom/Button';
import { TrackNextIcon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes } from 'react';

const NextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <Button {...props}>
        <TrackNextIcon />
      </Button>
    </>
  );
};

export default NextButton;
