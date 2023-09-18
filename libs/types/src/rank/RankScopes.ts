export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageArticles: boolean;
  manageUsers: boolean;
  manageRooms: boolean;
  manageBetaCodes: boolean;
  managePermissions: boolean;
  manageSupportTickets: boolean;
  manageStaffApplications: boolean;
  manageRadioRequests: boolean;
}

export interface RankFlagsWire {
  showOnStaffPage: boolean;
  acceptingApplications: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageArticles: false,
  manageUsers: false,
  manageRooms: false,
  manageBetaCodes: false,
  managePermissions: false,
  manageSupportTickets: false,
  manageStaffApplications: false,
  manageRadioRequests: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageArticles: 'Manage Articles',
  manageUsers: 'Manage Users',
  manageRooms: 'Manage Rooms',
  manageBetaCodes: 'Manage Beta Codes',
  managePermissions: 'Manage Permissions',
  manageSupportTickets: 'Manage Support Tickets',
  manageStaffApplications: 'Manage Staff Applications',
  manageRadioRequests: 'Manage Radio Requests',
};

export const rankFlagsLabels: Record<keyof RankFlagsWire, string> = {
  showOnStaffPage: 'Show On Staff Page',
  acceptingApplications: 'Accepting Applications',
};
