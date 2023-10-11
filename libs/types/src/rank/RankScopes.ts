export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageSite: boolean;
  manageArticles: boolean;
  manageUsers: boolean;
  manageRooms: boolean;
  manageBetaCodes: boolean;
  managePermissions: boolean;
  manageSupportTickets: boolean;
  manageStaffApplications: boolean;
  manageRadioRequests: boolean;
  manageBugReports: boolean;
  manageBans: boolean;
  manageChatlogs: boolean;
  manageGroups: boolean;
  manageLanguages: boolean;
  manageRanks: boolean;
  manageWordFilter: boolean;
  manageStore: boolean;
}

export interface RankFlagsWire {
  showOnStaffPage: boolean;
  acceptingApplications: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageSite: false,
  manageArticles: false,
  manageUsers: false,
  manageRooms: false,
  manageBetaCodes: false,
  managePermissions: false,
  manageSupportTickets: false,
  manageStaffApplications: false,
  manageRadioRequests: false,
  manageBugReports: false,
  manageBans: false,
  manageChatlogs: false,
  manageGroups: false,
  manageLanguages: false,
  manageRanks: false,
  manageWordFilter: false,
  manageStore: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageSite: 'Manage Site',
  manageArticles: 'Manage Articles',
  manageUsers: 'Manage Users',
  manageRooms: 'Manage Rooms',
  manageBetaCodes: 'Manage Beta Codes',
  managePermissions: 'Manage Permissions',
  manageSupportTickets: 'Manage Support Tickets',
  manageStaffApplications: 'Manage Staff Applications',
  manageRadioRequests: 'Manage Radio Requests',
  manageBugReports: 'Manage Bug Reports',
  manageBans: 'Manage Bans',
  manageChatlogs: 'Manage Chatlogs',
  manageGroups: 'Manage Groups',
  manageLanguages: 'Manage Languages',
  manageRanks: 'Manage Ranks',
  manageWordFilter: 'Manage Wordfilter',
  manageStore: 'Manage Store',
};

export const rankFlagsLabels: Record<keyof RankFlagsWire, string> = {
  showOnStaffPage: 'Show On Staff Page',
  acceptingApplications: 'Accepting Applications',
};
