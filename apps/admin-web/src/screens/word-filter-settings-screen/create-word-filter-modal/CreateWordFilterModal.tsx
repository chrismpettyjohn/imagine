import {toast} from 'react-toastify'
import React, {useEffect, useState} from 'react';
import {WordFilterEditor} from '../word-filter-editor/WordFilterEditor';
import {useCreateWordFilter} from '@imagine-cms/web/src/hooks/create-word-filter.hook';
import {WordFilterBannableStatus, WordFilterCreateInputDTO, WordFilterStrictStatus} from '@imagine-cms/types';

export function CreateWordFilterModal() {
  const [wordFilterDTO, setWordFilterDTO] = useState<WordFilterCreateInputDTO>({
    word: '',
    replacement: '',
    strict: WordFilterStrictStatus.NotStrict,
    bannable: WordFilterBannableStatus.NotBannable,
  })
  const {runMutation, data, error, loading} = useCreateWordFilter(wordFilterDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error(`Your word filter couldn't be created due to a problem`);
      }

      if (data) {
        toast.success('Word filter created successfully');
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
      Create
    </WordFilterEditor>
  )
}
