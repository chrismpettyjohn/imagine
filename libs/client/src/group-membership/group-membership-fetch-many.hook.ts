import { useLazyQuery } from "@apollo/client";
import { GroupMembershipFragment } from "./group-membership.fragment";
import { GroupMembershipFilterManyInput } from "./group-membership.input";
import { GROUP_MEMBERSHIP_FETCH_MANY_QUERY, GroupMembershipFetchManyQueryResponse, GroupMembershipFetchManyQueryVariables } from "./group-membership-fetch-many.query";

export interface UseGroupMembershipFetchManyResponse {
  fetch(filter: GroupMembershipFilterManyInput): Promise<GroupMembershipFragment[]>;
  error?: Error;
  loading: boolean;
  data?: GroupMembershipFragment[];
}

export function useGroupMembershipFetchMany(): UseGroupMembershipFetchManyResponse {
  const [getGroupMemberships, { loading, error, data }] = useLazyQuery<GroupMembershipFetchManyQueryResponse, GroupMembershipFetchManyQueryVariables>(GROUP_MEMBERSHIP_FETCH_MANY_QUERY);

  const onFetchGroupMemberships = async (filter: GroupMembershipFilterManyInput): Promise<GroupMembershipFragment[]> => {
    try {
      const matchingGroupMemberships = await getGroupMemberships({ fetchPolicy: "network-only", variables: { filter } })
      console.log(matchingGroupMemberships)
      return matchingGroupMemberships.data!.groupMemberships;
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  }

  return {
    fetch: onFetchGroupMemberships,
    error,
    loading,
    data: data?.groupMemberships,
  }
}