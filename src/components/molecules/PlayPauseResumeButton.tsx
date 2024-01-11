import Button from '@atom/Button';
import { TimerStatus } from '@hook/useTimer';
import { PauseIcon, PlayIcon, ResumeIcon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes } from 'react';

interface PlayPauseResumeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: TimerStatus;
}

const PlayPauseResumeButton = (props: PlayPauseResumeButtonProps) => {
  const { status } = props;

  const icon = () => {
    switch (status) {
      case TimerStatus.PLAYING:
        return <PauseIcon />;
      case TimerStatus.RESUME:
        return <ResumeIcon />;
      default:
        return <PlayIcon />;
    }
  };

  return (
    <>
      <Button {...props}>{icon()}</Button>
    </>
  );
};

export default PlayPauseResumeButton;
