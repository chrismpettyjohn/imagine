import gql from 'graphql-tag';
import { SupportTicketFilterManyInput } from './support-ticket.input';
import { SUPPORT_TICKET_FRAGMENT, SupportTicketFragment } from './support-ticket.fragment';

export const SUPPORT_TICKET_FETCH_MANY_QUERY: any = gql`
  ${SUPPORT_TICKET_FRAGMENT}
  query($filter: SupportTicketFilterManyInput!) {
    supportTickets(filter: $filter) {
      ...SupportTicketFragment
    }
  }
`
export interface SupportTicketFetchManyQueryVariables {
  filter: SupportTicketFilterManyInput;
}

export interface SupportTicketFetchManyQueryResponse {
  supportTickets: SupportTicketFragment[];
}