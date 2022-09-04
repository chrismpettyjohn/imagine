import {toast} from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {DeleteButtonProps} from './DeleteButton.types';

export function DeleteButton<Resource>({resource, mutation, onDelete}: DeleteButtonProps<Resource>) {
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!mutation.loading) {
      if (mutation.error) {
        toast.error(`${resource} couldn't be deleted due to an error`);
      }

      if (mutation.data) {
        toast.success(`${resource} has been deleted`);
        onDelete();
      }
    }
  }, [mutation]);

  const onDeleteArticle = () => {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    mutation.runMutation();
  }

  const [buttonIcon, buttonText] = showConfirm
    ? ['fas fa-exclamation-triangle', 'Are You Sure?']
    : mutation.loading
      ? ['fas fa-spinner fa-spin', 'Deleting...']
      : ['fas fa-trash', 'Delete']

  return (
    <button className="btn btn-danger" onClick={onDeleteArticle}>
      <i className={`${buttonIcon} mr-2` }/>
      {buttonText}
    </button>
  )
}
