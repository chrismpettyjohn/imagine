export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageArticles: boolean;
  manageUsers: boolean;
  manageSupportTickets: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageArticles: false,
  manageUsers: false,
  manageSupportTickets: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageArticles: 'Manage Articles',
  manageUsers: 'Manage Users',
  manageSupportTickets: 'Manage Support Tickets',
};
