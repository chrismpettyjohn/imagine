import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useBugReportFetchMany } from '@imagine-cms/client';
import { CreateBugReportCard } from '../../components/create-bug-report-card/CreateBugReportCard';

export function BugReportsScreen() {
  const fetchBugReports = useBugReportFetchMany();

  const onFetchBugReports = async () => {
    await fetchBugReports.fetch({});
  }

  useEffect(() => {
    onFetchBugReports();
  }, []);

  return (
    <>
      <CreateBugReportCard onCreate={onFetchBugReports} />
      <br />
      <Card header="Bug Reports">
        {
          fetchBugReports.loading && (
            <div style={{ display: 'flex', gap: 8 }}>
              <i className="fa fa-spinner fa-spin" />
              Loading bug reports...
            </div>
          )
        }
        {
          fetchBugReports.data?.length === 0 && (
            <p>No bug reports found</p>
          )
        }
        {
          fetchBugReports.data?.map(_ => (
            <div key={`bug_report_${_.id}`}>#{_.id}</div>
          ))
        }
      </Card>
    </>
  )
}