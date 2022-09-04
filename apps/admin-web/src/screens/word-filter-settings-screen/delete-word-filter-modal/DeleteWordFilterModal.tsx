import {toast} from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {useWordFilterDelete} from '@imagine-cms/web';
import {DeleteWordFilterModalProps} from './DeleteWordFilterModal.types';

export function DeleteWordFilterModal({wordFilter, onDelete}: DeleteWordFilterModalProps) {
  const {runMutation, data, error, loading} = useWordFilterDelete(wordFilter.id!);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error(`${wordFilter.word} couldn't be removed from the blacklist due to an error`);
      }

      if (data) {
        toast.success(`${wordFilter.word} has been removed from the blacklist`);
        onDelete();
      }
    }
  }, [data, error, loading]);

  const onDeleteWordFilter = () => {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    runMutation();
  }

  const [buttonIcon, buttonText] = showConfirm
    ? ['fas fa-exclamation-triangle', 'Are You Sure?']
    : loading
      ? ['fas fa-spinner fa-spin', 'Deleting...']
      : ['fas fa-trash', 'Delete']

  return (
    <button className="btn btn-danger" onClick={onDeleteWordFilter}>
      <i className={`${buttonIcon} mr-2` }/>
      {buttonText}
    </button>
  )
}
