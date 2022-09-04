import React from 'react';
import {useWordFilterDelete} from '@imagine-cms/web';
import {DeleteWordFilterModalProps} from './DeleteWordFilterModal.types';
import {DeleteModal} from '../../../components/delete-modal/DeleteModal';

export function DeleteWordFilterModal({wordFilter, onDelete}: DeleteWordFilterModalProps) {
  const deleteWordFilter = useWordFilterDelete(wordFilter.id!);
  return <DeleteModal resource={wordFilter.word!} mutation={deleteWordFilter} onDelete={onDelete} />
}
