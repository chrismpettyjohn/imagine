import {WordFilterWire} from '@imagine-cms/types';

export interface EditWordFilterModalProps {
  wordFilter: WordFilterWire;
  onSave(updatedWordFilter: WordFilterWire): void;
}
