import { gql } from 'graphql-tag';
import { RankScopesWire } from '@imagine-cms/types';

// This doesn't need to be here, but it will keep the scopes in sync to help prevent any unexpected issues when relying on scope guards
export const QUERIED_SCOPES: Record<keyof RankScopesWire, true> = {
  accessAdminPanel: true,
  manageArticles: true,
  manageUsers: true,
  manageRooms: true,
  managePermissions: true,
  manageSupportTickets: true,
}

export interface RankFragment {
  id: number;
  name: string;
  description: string;
  badgeCode: string;
  scopes: RankScopesWire;
}

export const RANK_FRAGMENT: any = gql`
  fragment RankFragment on RankModel {
    id
    name
    description
    badgeCode
    scopes {
      accessAdminPanel
      manageArticles
      manageUsers
      manageRooms
      managePermissions
      manageSupportTickets
    }
  }`

