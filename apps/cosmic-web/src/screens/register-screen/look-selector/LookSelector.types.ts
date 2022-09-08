import { UserGender } from '@imagine-cms/types';

export interface LookSelectorProps {
  gender: UserGender;
  look?: string;
  onChangeGender(newGender: UserGender): void;
  onChangeLook(newLook: string): void;
}
