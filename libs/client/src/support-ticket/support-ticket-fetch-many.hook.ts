import { useLazyQuery } from "@apollo/client";
import { SupportTicketFragment } from "./support-ticket.fragment";
import { SupportTicketFilterManyInput } from "./support-ticket.input";
import { SUPPORT_TICKET_FETCH_MANY_QUERY, SupportTicketFetchManyQueryResponse, SupportTicketFetchManyQueryVariables } from "./support-ticket-fetch-many.query";

export interface UseSupportTicketFetchManyResponse {
  fetch(filter: SupportTicketFilterManyInput): Promise<SupportTicketFragment[]>;
  error?: Error;
  loading: boolean;
  data?: SupportTicketFragment[];
}

export function useSupportTicketFetchMany(): UseSupportTicketFetchManyResponse {
  const [getSupportTickets, { loading, error, data }] = useLazyQuery<SupportTicketFetchManyQueryResponse, SupportTicketFetchManyQueryVariables>(SUPPORT_TICKET_FETCH_MANY_QUERY);

  const onFetchSupportTickets = async (filter: SupportTicketFilterManyInput): Promise<SupportTicketFragment[]> => {
    const matchingSupportTickets = await getSupportTickets({ fetchPolicy: "network-only", variables: { filter } })
    return matchingSupportTickets.data!.supportTickets;
  }

  return {
    fetch: onFetchSupportTickets,
    error,
    loading,
    data: data?.supportTickets,
  }
}