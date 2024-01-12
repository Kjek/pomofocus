import Dropdown from '@atom/Dropdown';
import NumberInput from '@atom/NumberInput';
import Text from '@atom/Text';
import { Setting } from '@type/Setting';
import { useLocalStorage } from 'usehooks-ts';

const SettingsOption = (props: Setting) => {
  const { storageKey: key, defaultValue, name, options } = props;

  const [value, setValue] = useLocalStorage(key, defaultValue);

  if (options) {
    return (
      <>
        <div className='flex w-full gap-4'>
          <Text className='flex-grow self-center'>{name}</Text>
          <Dropdown
            options={options}
            className='w-1/3'
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Text className='flex-grow self-center'>{name}</Text>
        <NumberInput
          defaultValue={value}
          className='w-1/3'
          onChange={(event) => setValue(event.target.value)}
        />
      </>
    );
  }
};

export default SettingsOption;
