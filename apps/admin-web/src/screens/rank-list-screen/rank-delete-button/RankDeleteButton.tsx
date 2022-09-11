import React from 'react';
import {useRankDelete} from '@imagine-cms/web';
import {DeleteRankModalProps} from './RankDeleteButton.types';
import {DeleteButton} from '../../../components/delete-button/DeleteButton';

export function DeleteRankModal({rank, onDelete}: DeleteRankModalProps) {
  const rankDelete = useRankDelete(rank.id!);
  return <DeleteButton resource={rank.name!} mutation={rankDelete} onDelete={onDelete} />
}
