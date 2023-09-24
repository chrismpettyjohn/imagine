import { Link, useRoute } from 'wouter';
import React, { useEffect, useMemo } from 'react';
import { Card } from '../../components/card/Card';
import { useBugReportFetchOne } from '@imagine-cms/client';
import { OpenBugReportButton } from '../../components/open-bug-report-button/OpenBugReportButton';
import { ResolveBugReportButton } from '../../components/resolve-bug-report-button/ResolveBugReportButton';

export function BugReportViewScreen() {
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
    const bugReport = fetchBugReport.data?.content ? `"${fetchBugReport.data.content.slice(0, 255)}"` : `#${bugReportID}`;
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flex: 1, gap: 8 }}>
          <Link to="/bug-reports">
            <i className="fa fa-caret-left" style={{ cursor: 'pointer' }} />
          </Link>
          Viewing Bug Report <b>{bugReport}</b>
        </div>
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
      <Card header={cardHeader}>
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
      <Card header="Comments">
        lol
      </Card>
    </>
  )
}