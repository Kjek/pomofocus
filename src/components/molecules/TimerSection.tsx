import Button from '@atom/Button';
import Text from '@atom/Text';
import useTimer from '@hook/useTimer';

const TimerSection = () => {
  const { toggleTimer, formatedTime, status } = useTimer();

  return (
    <div className='m-auto flex w-1/2 flex-col gap-2'>
      <Text className='text-center'>{formatedTime}</Text>
      <Button value={status} onClick={toggleTimer}></Button>
    </div>
  );
};

export default TimerSection;
