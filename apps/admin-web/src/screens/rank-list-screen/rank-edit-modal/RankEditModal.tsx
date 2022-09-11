import {toast} from 'react-toastify';
import {Modal} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {useRankUpdateByID} from '@imagine-cms/web';
import {RankCreateInputDTO} from '@imagine-cms/types';
import {RankEditor} from '../rank-editor/RankEditor';
import {EditRankModalProps} from './RankEditModal.types';

export function EditRankModal({rank, onUpdate}: EditRankModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateRankDTO, setUpdateRankDTO] = useState<RankCreateInputDTO>({
    name: rank.name!,
    description: rank.description!,
    badgeCode: rank.badgeCode!,
  });
  const {runMutation, data, error, loading} = useRankUpdateByID(rank.id!, updateRankDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error('There was a problem updating your rank');
      }
      if (data) {
        toast.success('Your rank was updated successfully');
        onUpdate({...rank, ...updateRankDTO});
      }
    }
  }, [data, error, loading]);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onEdit = (changes: Partial<RankCreateInputDTO>) => {
    setUpdateRankDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  return (
    <>
      <button className="btn btn-primary" onClick={onToggle}>
        <i className="fas fa-pencil mr-2" /> Edit
      </button>
      {
        isOpen && (
          <Modal show onHide={onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Editing Rank</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RankEditor rankDTO={updateRankDTO} onEdit={onEdit} onSave={runMutation} />
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
