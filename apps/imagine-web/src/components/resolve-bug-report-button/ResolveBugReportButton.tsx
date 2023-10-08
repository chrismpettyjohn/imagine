import React from 'react';
import { toast } from 'react-toastify';
import { ScopeGuard } from '@imagine-cms/web';
import { ButtonBrand } from '../button/Button.remix';
import { useBugReportResolve } from '@imagine-cms/client';
import { ResolveBugReportButtonProps } from './ResolveBugReportButton.types';

export function ResolveBugReportButton({ bugReport, onResolved }: ResolveBugReportButtonProps) {
  const resolveBug = useBugReportResolve();

  const onResolveBug = async () => {
    try {
      await resolveBug.execute({ id: bugReport.id });
      toast.success(`Successfully resolved bug report #{${bugReport.id}}`)
      onResolved();
    } catch (e: any) {
      toast.error(`Failed to resolve bug report #${bugReport.id}`)
    }
  }

  if (bugReport.resolvedAt) {
    return null;
  }

  return (
    <ScopeGuard scope="manageBugReports" redirect={false}>
      <ButtonBrand type="button" onClick={onResolveBug} disabled={resolveBug.loading} style={{ width: 250, height: 'fit-content' }}>
        <i className="fa fa-check-circle" style={{ marginRight: 8 }} />
        Close as Resolved
      </ButtonBrand>
    </ScopeGuard>
  )
}