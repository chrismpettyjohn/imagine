export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageArticles: boolean;
  manageUsers: boolean;
  manageRooms: boolean;
  manageBetaCodes: boolean;
  managePermissions: boolean;
  manageSupportTickets: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageArticles: false,
  manageUsers: false,
  manageRooms: false,
  manageBetaCodes: false,
  managePermissions: false,
  manageSupportTickets: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageArticles: 'Manage Articles',
  manageUsers: 'Manage Users',
  manageRooms: 'Manage Rooms',
  manageBetaCodes: 'Manage Beta Codes',
  managePermissions: 'Manage Permissions',
  manageSupportTickets: 'Manage Support Tickets',
};
