import {ArticleCreateInputDTO} from '@imagine-cms/types';

export interface ArticleEditorProps {
  articleDTO: ArticleCreateInputDTO;
  onEdit(changes: Partial<ArticleCreateInputDTO>): void;
  onSave(): void;
}
