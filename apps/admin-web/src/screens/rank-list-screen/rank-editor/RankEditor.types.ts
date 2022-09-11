import {RankCreateInputDTO} from '@imagine-cms/types';

export interface RankEditorProps {
  rankDTO: RankCreateInputDTO;
  onEdit(changes: Partial<RankCreateInputDTO>): void;
  onSave(): void;
}
