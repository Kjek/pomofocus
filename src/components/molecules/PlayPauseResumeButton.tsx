import Button from '@atom/Button';
import { PauseIcon, PlayIcon, ResumeIcon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes } from 'react';

interface PlayPauseResumeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: 0 | 1 | 2;
}

const PlayPauseResumeButton = (props: PlayPauseResumeButtonProps) => {
  const { status } = props;

  const icon = () => {
    switch (status) {
      case 1:
        return <PauseIcon />;
      case 2:
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
