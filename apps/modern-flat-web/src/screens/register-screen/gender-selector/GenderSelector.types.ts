import {UserGender} from '@imagine-cms/types';

export interface GenderSelectorProps {
  gender?: UserGender;
  onChange(newGender: UserGender): void;
}
