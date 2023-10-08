import { Card } from '../../components/card/Card';
import React, { useEffect, useMemo, useState } from 'react';
import { useBugReportFetchMany } from '@imagine-cms/client';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../components/button/Button.remix';
import { CreateBugReportCard } from '../../components/create-bug-report-card/CreateBugReportCard';
import { BugReportGridContainer } from '../../components/bug-report-grid-container/BugReportGridContainer';
import { BugReportGridContainerMock } from '../../components/bug-report-grid-container/BugReportGridContainer.mock';

export const BUG_REPORTS_PAGE_SIZE = 4;

export function BugReportsScreen() {
  const [page, setPage] = useState(0);
  const fetchBugReports = useBugReportFetchMany();

  const bugReportsHeader = useMemo(() => (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
      <div>Bug Reports</div>
      {page > 0 && <small>Page {page + 1}</small>}
    </div>
  ), [page]);

  const canGoUp = (fetchBugReports?.data?.length ?? 0) >= BUG_REPORTS_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }


  const onFetchBugReports = async () => {
    await fetchBugReports.fetch({ skip: page & BUG_REPORTS_PAGE_SIZE, limit: BUG_REPORTS_PAGE_SIZE });
  }

  useEffect(() => {
    onFetchBugReports();
  }, [page]);

  return (
    <>
      <CreateBugReportCard onCreate={onFetchBugReports} />
      <br />
      <Card header={bugReportsHeader}>
        {
          fetchBugReports.data?.length === 0 && (
            <p>No bug reports found</p>
          )
        }
        <GridLarge>
          {
            fetchBugReports.loading && (
              <>
                <BugReportGridContainerMock />
                <BugReportGridContainerMock />
                <BugReportGridContainerMock />
                <BugReportGridContainerMock />
              </>
            )
          }
          {
            fetchBugReports.data?.map(_ => (
              <BugReportGridContainer bugReport={_} key={`bug_report_${_.id}`} />
            ))
          }
        </GridLarge>
        <GridLarge>
          {canGoDown ?
            <ButtonNoBorder onClick={goBackOnePage}>
              <i className={fetchBugReports.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
            </ButtonNoBorder>
            : <div />}
          {
            canGoUp && (
              <ButtonNoBorder onClick={goUpOnePage}>
                <i className={fetchBugReports.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
              </ButtonNoBorder>
            )
          }
        </GridLarge>
      </Card>
    </>
  )
}