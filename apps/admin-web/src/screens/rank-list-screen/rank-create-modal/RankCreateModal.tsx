import {toast} from 'react-toastify';
import {Modal} from 'react-bootstrap';
import {useRankCreate} from '@imagine-cms/web';
import React, {useEffect, useState} from 'react';
import {RankCreateInputDTO} from '@imagine-cms/types';
import {RankEditor} from '../rank-editor/RankEditor';
import {CreateRankModalProps} from './RankCreateModal.types';

export function RankCreateModal({onCreate}: CreateRankModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [createRankDTO, setCreateRankDTO] = useState<RankCreateInputDTO>({
    name: '',
    description: '',
    badgeCode: '',
  });
  const {runMutation, data, error, loading} = useRankCreate(createRankDTO);

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast.error('There was a problem creating your rank');
      }
      if (data) {
        toast.success('Your rank was created successfully');
        onCreate(data.rank);
      }
    }
  }, [data, error, loading]);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onEdit = (changes: Partial<RankCreateInputDTO>) => {
    setCreateRankDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  return (
    <>
      <button className="btn btn-success" onClick={onToggle}>
        <i className="fas fa-plus mr-2" />
        Create
      </button>
      {
        isOpen && (
          <Modal show onHide={onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>New Rank</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RankEditor rankDTO={createRankDTO} onEdit={onEdit} onSave={runMutation} />
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
