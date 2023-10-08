import { useLazyQuery } from "@apollo/client";
import { UserPinnedFurnitureFragment } from "./user-pinned-furniture.fragment";
import { UserPinnedFurnitureFilterManyInput } from "./user-pinned-furniture.input";
import { USER_PINNED_FURNITURE_FETCH_MANY_QUERY, UserPinnedFurnitureFetchManyQueryResponse, UserPinnedFurnitureFetchManyQueryVariables } from "./user-pinned-furniture-fetch-many.query";


export interface UseUserPinnedFurnitureFetchManyResponse {
  fetch(filter: UserPinnedFurnitureFilterManyInput): Promise<UserPinnedFurnitureFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserPinnedFurnitureFragment[];
}

export function useUserPinnedFurnitureFetchMany(): UseUserPinnedFurnitureFetchManyResponse {
  const [getUserPinnedFurnitures, { loading, error, data }] = useLazyQuery<UserPinnedFurnitureFetchManyQueryResponse, UserPinnedFurnitureFetchManyQueryVariables>(USER_PINNED_FURNITURE_FETCH_MANY_QUERY);

  const onFetchUserPinnedFurnitures = async (filter: UserPinnedFurnitureFilterManyInput): Promise<UserPinnedFurnitureFragment[]> => {
    const matchingUserPinnedFurnitures = await getUserPinnedFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserPinnedFurnitures.data!.userPinnedFurnitures;
  }

  return {
    fetch: onFetchUserPinnedFurnitures,
    error,
    loading,
    data: data?.userPinnedFurnitures,
  }
}