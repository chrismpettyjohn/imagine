import React, { HTMLProps } from 'react';
import { ButtonDanger } from '../button/Button.remix';
import { BugReportGridContainerElement } from './BugReportGridContainer.styled';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

export function BugReportGridContainerMock({ ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <BugReportGridContainerElement {...props}>
      <SmallUserProfileContainerMock showOnlineStatus={false} style={{ minHeight: 200 }} />
      <div>
        <h1>#0 -</h1>
        <h6>-</h6>
        -
        <ButtonDanger>Reported at -</ButtonDanger>
      </div>
    </BugReportGridContainerElement>
  )
}