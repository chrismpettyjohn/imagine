import { gql } from 'graphql-tag';
import { RankScopesWire } from '@imagine-cms/types';

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
      manageSupportTickets
    }
  }`