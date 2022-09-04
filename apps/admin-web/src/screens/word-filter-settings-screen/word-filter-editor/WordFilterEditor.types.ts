import {ReactNode} from 'react';
import {WordFilterCreateInputDTO} from '@imagine-cms/types';

export interface WordFilterEditorProps {
  children: ReactNode;
  wordFilterDTO: WordFilterCreateInputDTO;
  onEdit(changes: Partial<WordFilterCreateInputDTO>): void;
  onSave(): void;
}
