import React from 'react';
import { toast } from 'react-toastify';
import { ScopeGuard } from '@imagine-cms/web';
import { ButtonDanger } from '../button/Button.remix';
import { useBugReportOpen } from '@imagine-cms/client';
import { OpenBugReportButtonProps } from './OpenBugReportButton.types';

export function OpenBugReportButton({ bugReport, onOpen }: OpenBugReportButtonProps) {
  const openBug = useBugReportOpen();

  const onResolveBug = async () => {
    try {
      await openBug.execute({ id: bugReport.id });
      toast.success(`Successfully resolved bug report #{${bugReport.id}}`)
      onOpen();
    } catch (e: any) {
      toast.error(`Failed to resolve bug report #${bugReport.id}`)
    }
  }

  if (!bugReport.resolvedAt) {
    return null;
  }

  return (
    <ScopeGuard scope="manageBugReports" redirect={false}>
      <ButtonDanger type="button" onClick={onResolveBug} disabled={openBug.loading} style={{ width: 250, height: 'fit-content' }}>
        <i className="fa fa-times-circle" style={{ marginRight: 8 }} />
        Reopen Bug
      </ButtonDanger>
    </ScopeGuard>
  )
}