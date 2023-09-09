import { useLazyQuery } from "@apollo/client";
import { UserBadgeFragment } from "./user-badge.fragment";
import { UserBadgeFilterManyInput } from "./user-badge.input";
import { USER_BADGE_FETCH_MANY_QUERY, UserBadgeFetchManyQueryResponse, UserBadgeFetchManyQueryVariables } from "./user-badge-fetch-many.query";

export interface UseUserBadgeFetchManyResponse {
  fetch(filter: UserBadgeFilterManyInput): Promise<UserBadgeFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserBadgeFragment[];
}

export function useUserBadgeFetchMany(): UseUserBadgeFetchManyResponse {
  const [getUserBadges, { loading, error, data }] = useLazyQuery<UserBadgeFetchManyQueryResponse, UserBadgeFetchManyQueryVariables>(USER_BADGE_FETCH_MANY_QUERY);

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