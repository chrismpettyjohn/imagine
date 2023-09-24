import { toast } from 'react-toastify';
import React, { useEffect, useMemo } from 'react';
import { Card } from '../../blocks/card/Card';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { useBetaCodeCreate, useBetaCodeFetchMany } from '@imagine-cms/client';
import { BetaCodesTableLazy } from '../../components/beta-codes-table/BetaCodesTable.lazy';

export function BetaCodesOverviewScreen() {
  const fetchBetaCodes = useBetaCodeFetchMany();

  const onFetchBetaCodes = async () => {
    await fetchBetaCodes.fetch({ limit: 25 });
  }

  useEffect(() => {
    onFetchBetaCodes();
  }, []);

  const betaCodeCreate = useBetaCodeCreate();

  const onBetaCodeCreate = async () => {
    try {
      if (betaCodeCreate.loading) {
        return;
      }
      const newBetaCode = await betaCodeCreate.execute();
      toast.success(`Successfully added beta code ${newBetaCode.betaCode}`)
      await onFetchBetaCodes();
    } catch (e: any) {
      console.log(e);
      toast.error('Beta code could not be created at this time')
    }
  }

  const header = useMemo(() => (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
      <div>Beta Codes</div>
      <ButtonPrimary disabled={betaCodeCreate.loading} type="button" onClick={onBetaCodeCreate}>
        <i className={betaCodeCreate.loading ? 'fa fa-spinner fa-spin' : 'fa fa-plus-circle'} />&nbsp;
        Add Code
      </ButtonPrimary>
    </div>
  ), []);

  return (
    <Card header={header} style={{ height: '100%' }}>
      <BetaCodesTableLazy betaCodes={fetchBetaCodes.data} onChanges={onFetchBetaCodes} />
    </Card>
  )
}