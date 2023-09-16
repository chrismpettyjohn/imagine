import { ArticleFragment } from "@imagine-cms/client";
import { ArticleCreateInputDTO } from "@imagine-cms/types";

export interface ArticleEditorCardProps {
  defaultArticle?: ArticleFragment;
  onSave(articleInput: ArticleCreateInputDTO): void | Promise<void>;
}