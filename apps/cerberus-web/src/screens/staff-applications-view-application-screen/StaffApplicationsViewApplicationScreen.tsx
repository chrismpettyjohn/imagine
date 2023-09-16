import React from 'react';
import { Link, useRoute } from 'wouter';

export function StaffApplicationsViewApplicationScreen() {
  const [, params] = useRoute('/staff-applications/:staffApplicationID');
  const staffApplicationID = Number(params!.staffApplicationID);
  return (
    <>
      <h1>
        <Link to="/staff-applications">
          <i className="fa fa-caret-left" style={{ marginRight: 8 }} />
        </Link>
        Staff Applications - Editing {staffApplicationID}
      </h1>
      {staffApplicationID}
    </>
  )
}