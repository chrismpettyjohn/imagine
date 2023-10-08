import { useLazyQuery } from "@apollo/client";
import { UserPinnedFurnitureFragment } from "./user-pinned-furniture.fragment";
import { UserPinnedFurnitureFilterOneInput } from "./user-pinned-furniture.input";
import { USER_PINNED_FURNITURE_FETCH_ONE_QUERY, UserPinnedFurnitureFetchOneQueryResponse, UserPinnedFurnitureFetchOneQueryVariables } from "./user-pinned-furniture-fetch-one.query";


export interface UseUserPinnedFurnitureFetchOneResponse {
  fetch(filter: UserPinnedFurnitureFilterOneInput): Promise<UserPinnedFurnitureFragment>;
  error?: Error;
  loading: boolean;
  data?: UserPinnedFurnitureFragment;
}

export function useUserPinnedFurnitureFetchOne(): UseUserPinnedFurnitureFetchOneResponse {
  const [getUserPinnedFurnitures, { loading, error, data }] = useLazyQuery<UserPinnedFurnitureFetchOneQueryResponse, UserPinnedFurnitureFetchOneQueryVariables>(USER_PINNED_FURNITURE_FETCH_ONE_QUERY);

  const onFetchUserPinnedFurnitures = async (filter: UserPinnedFurnitureFilterOneInput): Promise<UserPinnedFurnitureFragment> => {
    const matchingUserPinnedFurnitures = await getUserPinnedFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserPinnedFurnitures.data!.userPinnedFurniture;
  }

  return {
    fetch: onFetchUserPinnedFurnitures,
    error,
    loading,
    data: data?.userPinnedFurniture,
  }
}