import { useLazyQuery } from "@apollo/client";
import { UserBadgeFragment } from "./user-badge.fragment";
import { UserBadgeFilterManyInput } from "./user-badge.input";
import { GROUP_MEMBERSHIP_FETCH_MANY_QUERY } from "../group-membership/group-membership-fetch-many.query";
import { UserBadgeFetchManyQueryResponse, UserBadgeFetchManyQueryVariables } from "./user-badge-fetch-many.query";

export interface UseUserBadgeFetchManyResponse {
  fetch(filter: UserBadgeFilterManyInput): Promise<UserBadgeFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserBadgeFragment[];
}

export function useUserBadgeFetchMany(): UseUserBadgeFetchManyResponse {
  const [getUserBadges, { loading, error, data }] = useLazyQuery<UserBadgeFetchManyQueryResponse, UserBadgeFetchManyQueryVariables>(GROUP_MEMBERSHIP_FETCH_MANY_QUERY);

  const onFetchUserBadges = async (filter: UserBadgeFilterManyInput): Promise<UserBadgeFragment[]> => {
    const matchingUserBadges = await getUserBadges({ variables: { filter } })
    return matchingUserBadges.data!.userBadges;
  }

  return {
    fetch: onFetchUserBadges,
    error,
    loading,
    data: data?.userBadges,
  }
}