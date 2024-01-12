import Button from '@atom/Button';
import { GearIcon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes } from 'react';

const SettingsButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} className='self-end border-none'>
      <GearIcon className='h-4 w-4 sm:h-6 sm:w-6' />
    </Button>
  );
};

export default SettingsButton;
