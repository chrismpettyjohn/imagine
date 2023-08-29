import {WordFilterWire} from '@imagine-cms/types';

export interface DeleteWordFilterModalProps {
  wordFilter: WordFilterWire;
  onDelete(): void;
}
