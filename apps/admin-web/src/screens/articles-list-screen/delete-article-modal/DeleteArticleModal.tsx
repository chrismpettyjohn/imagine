import React from 'react';
import {useArticleDelete} from '@imagine-cms/web';
import {DeleteArticleModalProps} from './DeleteArticleModal.types';
import {DeleteModal} from '../../../components/delete-modal/DeleteModal';

export function DeleteArticleModal({article, onDelete}: DeleteArticleModalProps) {
  const articleDelete = useArticleDelete(article.id!);
  return <DeleteModal resource={article.name!} mutation={articleDelete} onDelete={onDelete} />
}
