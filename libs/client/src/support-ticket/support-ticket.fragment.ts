import gql from 'graphql-tag';

export const SUPPORT_TICKET_FRAGMENT: any = gql`
  fragment SupportTicketFragment on SupportTicketModel {
    id
    reportingUserID
    offendingUserID
    staffUserID
  }
`

export interface SupportTicketFragment {
  id: number;
  reportingUserID: number;
  offendingUserID: number;
  staffUserID: number;
}