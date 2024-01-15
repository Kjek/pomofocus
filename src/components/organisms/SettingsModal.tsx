import Text from '@atom/Text';
import CancelButton from '../molecules/CancelButton';
import SettingsButton from '../molecules/SettingsButton';
import SettingsOption from '../molecules/SettingsOption';
import { DEFAULT_SETTINGS } from 'components/data/DefaultSettings';

interface SettingsModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SettingsModal = (props: SettingsModalProps) => {
  const { isOpen, toggleOpen } = props;
  const settings = DEFAULT_SETTINGS;

  return (
    <>
      <SettingsButton onClick={toggleOpen} />
      {isOpen ? (
        <>
          <div className='absolute left-0 top-0 h-screen w-screen bg-black opacity-30' />
          <div className='fixed border-spacing-6 self-center pt-4 sm:pt-6'>
            <div className='m-auto flex w-fit flex-col gap-6 rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-600 dark:bg-gray-800'>
              <div className='flex'>
                <Text variant='h3' className='flex-grow self-center'>
                  Settings
                </Text>
                <CancelButton className='self-end' onClick={toggleOpen} />
              </div>
              <ul className='flex flex-col gap-4'>
                {settings.map((setting, index) => {
                  return (
                    <li className='flex' key={index}>
                      <SettingsOption
                        storageKey={setting.storageKey}
                        defaultValue={setting.defaultValue}
                        name={setting.name}
                        options={setting.options}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SettingsModal;
