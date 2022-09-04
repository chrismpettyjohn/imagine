import {toast} from 'react-toastify'
import React, {useEffect, useState} from 'react';
import {WordFilterCreateInputDTO} from '@imagine-cms/types';
import {EditWordFilterModalProps} from './EditWordFilterModal.types';
import {WordFilterEditor} from '../word-filter-editor/WordFilterEditor';
import {useCreateWordFilter} from '@imagine-cms/web/src/hooks/create-word-filter.hook';

export function EditWordFilterModal({wordFilter, onSave}: EditWordFilterModalProps) {
  const [wordFilterDTO, setWordFilterDTO] = useState<WordFilterCreateInputDTO>({
    word: wordFilter.word,
    replacement: wordFilter.replacement,
    strict: wordFilter.strict,
    bannable: wordFilter.bannable,
  })
  const {runMutation, data, error, loading} = useCreateWordFilter(wordFilterDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error(`Your word filter couldn't be updated due to a problem`);
      }

      if (data) {
        toast.success('Word filter updated successfully');
        onSave({
          ...wordFilter,
          ...wordFilterDTO,
        })
      }
    }
  }, [loading, error, data]);

  const onEdit = (changes: Partial<WordFilterCreateInputDTO>) => {
    setWordFilterDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  return (
    <WordFilterEditor wordFilterDTO={wordFilterDTO} onEdit={onEdit} onSave={runMutation}>
      <button className="btn btn-primary mr-2">
        <i className="fas fa-pencil" />
      </button>
    </WordFilterEditor>
  )
}
