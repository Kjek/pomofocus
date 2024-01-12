import { DropdownOption } from './DropdownOption';

export interface Setting {
  storageKey: string;
  name: string;
  defaultValue: string;
  options?: DropdownOption[];
}
