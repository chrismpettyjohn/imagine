import { gql } from 'graphql-tag';
import { RankFlagsWire, RankScopesWire } from '@imagine-cms/types';

// This doesn't need to be here, but it will keep the scopes in sync to help prevent any unexpected issues when relying on scope guards
export const QUERIED_SCOPES: Record<keyof RankScopesWire, false> = {
  accessAdminPanel: false,
  manageArticles: false,
  manageUsers: false,
  manageRooms: false,
  manageBetaCodes: false,
  managePermissions: false,
  manageSupportTickets: false,
  manageStaffApplications: false,
  manageRadioRequests: false,
  manageBugReports: false,
}

export interface RankFragment {
  id: number;
  name: string;
  badgeCode: string;
  scopes: RankScopesWire;
  flags: RankFlagsWire;
}

export const RANK_FRAGMENT: any = gql`
  fragment RankFragment on RankModel {
    id
    name
    badgeCode
    scopes {
      accessAdminPanel
      manageArticles
      manageUsers
      manageRooms
      manageBetaCodes
      managePermissions
      manageSupportTickets
      manageStaffApplications
      manageBugReports
    }
    flags {
      showOnStaffPage
      acceptingApplications
    }
  }`

