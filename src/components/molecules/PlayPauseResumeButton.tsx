import Button from '@atom/Button';
import { TimerStatus } from '@hook/useTimer';
import { PauseIcon, PlayIcon, ResumeIcon } from '@radix-ui/react-icons';
import type { ButtonHTMLAttributes } from 'react';

interface PlayPauseResumeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: TimerStatus;
}

const PlayPauseResumeButton = (props: PlayPauseResumeButtonProps) => {
  const { status } = props;

  const icon = () => {
    switch (status) {
      case TimerStatus.PLAYING:
        return <PauseIcon className='h-6 w-6' />;
      case TimerStatus.RESUME:
        return <ResumeIcon className='h-6 w-6' />;
      default:
        return <PlayIcon className='h-6 w-6' />;
    }
  };

  return (
    <>
      <Button {...props}>{icon()}</Button>
    </>
  );
};

export default PlayPauseResumeButton;
