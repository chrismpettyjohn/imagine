import React from 'react';
import { ButtonDanger } from '../button/Button.remix';
import { BugReportGridContainerElement } from './BugReportGridContainer.styled';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

export function BugReportGridContainerMock() {
  return (
    <BugReportGridContainerElement>
      <SmallUserProfileContainerMock showOnlineStatus={false} style={{ minHeight: 200 }} />
      <div>
        <h1>#0 -</h1>
        -
        <ButtonDanger>Reported at -</ButtonDanger>
      </div>
    </BugReportGridContainerElement>
  )
}