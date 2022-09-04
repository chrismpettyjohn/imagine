import React from 'react';
import {useWordFilterDelete} from '@imagine-cms/web';
import {DeleteWordFilterModalProps} from './DeleteWordFilterModal.types';
import {DeleteButton} from '../../../components/delete-button/DeleteButton';

export function DeleteWordFilterModal({wordFilter, onDelete}: DeleteWordFilterModalProps) {
  const deleteWordFilter = useWordFilterDelete(wordFilter.id!);
  return <DeleteButton resource={wordFilter.word!} mutation={deleteWordFilter} onDelete={onDelete} />
}
