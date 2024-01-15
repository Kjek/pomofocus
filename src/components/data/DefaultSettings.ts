import { Setting } from '@type/Setting';

export const DEFAULT_SETTINGS: Setting[] = [
  {
    storageKey: 'pomodoro.time',
    name: 'Pomodoro timer',
    defaultValue: 25,
  },
  {
    storageKey: 'short.break.time',
    name: 'Short break timer',
    defaultValue: 5,
  },
  {
    storageKey: 'long.break.time',
    name: 'Long break timer',
    defaultValue: 15,
  },
  {
    storageKey: 'long.break.interval',
    name: 'Long break inteval',
    defaultValue: 4,
  },
];
