export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageArticles: boolean;
  manageUsers: boolean;
  manageRooms: boolean;
  manageSupportTickets: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageArticles: false,
  manageUsers: false,
  manageRooms: false,
  manageSupportTickets: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageArticles: 'Manage Articles',
  manageUsers: 'Manage Users',
  manageRooms: 'Manage Rooms',
  manageSupportTickets: 'Manage Support Tickets',
};
