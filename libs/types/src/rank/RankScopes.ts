export interface RankScopesWire {
  accessAdminPanel: boolean;
  manageArticles: boolean;
}

export const exampleRankScopesWire: RankScopesWire = {
  accessAdminPanel: false,
  manageArticles: false,
};

export const rankScopesLabels: Record<keyof RankScopesWire, string> = {
  accessAdminPanel: 'Access Admin Panel',
  manageArticles: 'Manage Articles',
};
