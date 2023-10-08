import DayJS from 'dayjs';
import { Link, useRoute } from 'wouter';
import { configContext } from '@imagine-cms/web';
import { Card } from '../../components/card/Card';
import { useBugReportFetchOne } from '@imagine-cms/client';
import React, { useContext, useEffect, useMemo } from 'react';
import { GridSmallLarge } from '../../components/grid/Grid.remix';
import { OpenBugReportButton } from '../../components/open-bug-report-button/OpenBugReportButton';
import { ResolveBugReportButton } from '../../components/resolve-bug-report-button/ResolveBugReportButton';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../../components/small-user-profile-container/SmallUserProfileContainerMock';
import { SmallUserProfileContainerLazy } from '../../components/small-user-profile-container/SmallUserProfileContainerLazy';

export function BugReportViewScreen() {
  const { config } = useContext(configContext);
  const [, params] = useRoute<{ bugReportID: string }>('/bug-reports/:bugReportID');
  const bugReportID = Number(params!.bugReportID);
  const fetchBugReport = useBugReportFetchOne();

  const onFetchBugReport = async () => {
    await fetchBugReport.fetch({ id: bugReportID });
  }

  useEffect(() => {
    onFetchBugReport();
  }, []);

  const cardHeader = useMemo(() => {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        {fetchBugReport.data?.title ?? 'N/A'}
        <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'flex-end' }}>
          {
            fetchBugReport.data && (
              <>
                <ResolveBugReportButton bugReport={fetchBugReport.data} onResolved={onFetchBugReport} />
                <OpenBugReportButton bugReport={fetchBugReport.data} onOpen={onFetchBugReport} />
              </>
            )
          }
        </div>
      </div>
    )
  }, [fetchBugReport.data]);

  return (
    <>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center', objectPosition: 'center' }}>
        <h1><Link to="/bug-reports"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link> Bug Reports - Viewing #{bugReportID}</h1>
        <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'flex-end' }}>
          {
            fetchBugReport.data && (
              <>
                <ResolveBugReportButton bugReport={fetchBugReport.data} onResolved={onFetchBugReport} />
                <OpenBugReportButton bugReport={fetchBugReport.data} onOpen={onFetchBugReport} />
              </>
            )
          }
        </div>
      </div>
      <br />
      <GridSmallLarge>
        <div style={{ flex: 1 }}>
          <div style={{ flex: 1 }}>
            <h2>Reported</h2>
            <p>{fetchBugReport.data?.createdAt ? DayJS.unix(fetchBugReport.data.createdAt).format(config!.dateFormat) : 'N/A'}</p>
            {fetchBugReport.data?.reportingUser ? <SmallUserProfileContainer user={fetchBugReport.data?.reportingUser as any} /> : <SmallUserProfileContainerMock />}
          </div>
          <div style={{ flex: 1 }}>
            <h2>Resolved</h2>
            {fetchBugReport.data?.resolvingUserID && (
              <>
                <p>
                  {DayJS.unix(fetchBugReport.data.resolvedAt!).format(config!.dateFormat)}
                  - After <b>{DayJS.unix(fetchBugReport.data.createdAt!).diff(DayJS.unix(fetchBugReport.data.resolvedAt!), 'day')} days</b>
                </p>
                <SmallUserProfileContainerLazy userID={fetchBugReport.data.resolvingUserID} />
              </>
            )}
            {!fetchBugReport.data?.resolvingUserID && (
              <>
                N/A {fetchBugReport.data?.createdAt && <>- Waiting <b>{DayJS.unix(fetchBugReport.data.createdAt!).diff(DayJS.unix(fetchBugReport.data.createdAt), 'day')} days</b></>}
              </>
            )}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Card header={fetchBugReport.data?.title ?? '-'}>
            {fetchBugReport.loading && (
              <div style={{ display: 'flex', gap: 8 }}>
                <i className="fa fa-spinner fa-spin" />
                Loading bug reports...
              </div>
            )}
            {
              fetchBugReport.data?.content
            }
          </Card>
          <br />
          <Card header="Comments" style={{ height: '100%' }}>
            lol
          </Card>
        </div>
      </GridSmallLarge >
    </>
  )
}