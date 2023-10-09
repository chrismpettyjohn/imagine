import { useLazyQuery } from "@apollo/client";
import { UserFurnitureFragment } from "./user-furniture.fragment";
import { UserFurnitureFilterManyInput } from "./user-furniture.input";
import { USER_FURNITURE_FETCH_MANY_QUERY, UserFurnitureFetchManyQueryResponse, UserFurnitureFetchManyQueryVariables } from "./user-furniture-fetch-many.query";

export interface UseUserFurnitureFetchManyResponse {
  fetch(filter: UserFurnitureFilterManyInput): Promise<UserFurnitureFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserFurnitureFragment[];
}

export function useUserFurnitureFetchMany(): UseUserFurnitureFetchManyResponse {
  const [getUserFurnitures, { loading, error, data }] = useLazyQuery<UserFurnitureFetchManyQueryResponse, UserFurnitureFetchManyQueryVariables>(USER_FURNITURE_FETCH_MANY_QUERY);

  const onFetchUserFurnitures = async (filter: UserFurnitureFilterManyInput): Promise<UserFurnitureFragment[]> => {
    const matchingUserFurnitures = await getUserFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserFurnitures.data!.userFurnitures;
  }

  return {
    fetch: onFetchUserFurnitures,
    error,
    loading,
    data: data?.userFurnitures,
  }
}