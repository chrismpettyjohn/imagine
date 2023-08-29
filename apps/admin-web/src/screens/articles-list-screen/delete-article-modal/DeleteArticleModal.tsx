import React from 'react';
import {useArticleDelete} from '@imagine-cms/web';
import {DeleteArticleModalProps} from './DeleteArticleModal.types';
import {DeleteButton} from '../../../components/delete-button/DeleteButton';

export function DeleteArticleModal({article, onDelete}: DeleteArticleModalProps) {
  const articleDelete = useArticleDelete(article.id!);
  return <DeleteButton resource={article.name!} mutation={articleDelete} onDelete={onDelete} />
}
