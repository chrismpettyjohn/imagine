import React from 'react';
import { toast } from 'react-toastify';
import { useBetaCodeDelete } from '@imagine-cms/client';
import { ButtonDanger } from '../../blocks/button/Button.remix';
import { BetaCodeDeleteButtonProps } from './BetaCodeDeleteButton.types';

export function BetaCodeDeleteButton({ betaCode, onDelete }: BetaCodeDeleteButtonProps) {
  const betaCodeDelete = useBetaCodeDelete();

  const onDeleteBetaCode = async () => {
    try {
      await betaCodeDelete.execute({ id: betaCode.id });
      toast.success(`Beta code ${betaCode.betaCode} has been deleted`);
      onDelete();
    } catch {
      toast.error(`Failed to delete beta code ${betaCode.betaCode}`);
    }
  }

  const icon = betaCodeDelete.loading ? 'fa fa-spinner fa-spin' : 'fa fa-trash';

  return (
    <ButtonDanger onClick={onDeleteBetaCode}>
      <i className={icon} />&nbsp; Delete
    </ButtonDanger>
  )
}