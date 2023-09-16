import React from 'react';
import { useRoute } from 'wouter';

export function StaffApplicationsViewApplicationScreen() {
  const [, params] = useRoute('/staff-applications/:staffApplicationID');
  const staffApplicationID = Number(params!.staffApplicationID);
  return (
    <>

      {staffApplicationID}
    </>
  )
}