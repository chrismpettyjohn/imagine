import DayJS from 'dayjs';
import { Link } from 'wouter';
import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { ButtonDanger, ButtonSuccess } from '../button/Button.remix';
import { BugReportGridContainerProps } from './BugReportGridContainer.types';
import { BugReportGridContainerElement } from './BugReportGridContainer.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';

export function BugReportGridContainer({ bugReport }: BugReportGridContainerProps) {
  const { config } = useContext(configContext);
  return (
    <BugReportGridContainerElement>
      <SmallUserProfileContainer user={bugReport.reportingUser as any} showOnlineStatus={false} showMotto={false} style={{ minHeight: 200 }} />
      <div>
        <Link to={`/bug-reports/${bugReport.id}`}>
          <h1>#{bugReport.id} - {bugReport.url}</h1>
        </Link>
        <h4>{bugReport.content.slice(0, 255)}</h4>
        <Link to={`/bug-reports/${bugReport.id}`}>
          {
            bugReport.resolvedAt && (
              <ButtonSuccess>Resolved at {DayJS.unix(bugReport.resolvedAt).format(config!.dateFormat)} by <Link to={`/profile/${bugReport.resolvingUser!.username}`}><b>{bugReport.resolvingUser!.username}</b></Link></ButtonSuccess>
            )
          }
          {
            !bugReport.resolvedAt && (
              <ButtonDanger>Reported at {DayJS.unix(bugReport.createdAt).format(config!.dateFormat)}</ButtonDanger>
            )
          }
        </Link>
      </div>
    </BugReportGridContainerElement>
  )
}