import React from 'react';
import { useRoute } from 'wouter';
import { Card } from '../../components/card/Card';

export function BugReportViewScreen() {
  const [, params] = useRoute<{ bugReportID: string }>('/bug-reports/:bugReportID');
  const bugReportID = Number(params!.bugReportID);
  return (
    <>
      <Card header={<>Viewing Bug Report #{bugReportID}</>}>
        lol
      </Card>
    </>
  )
}