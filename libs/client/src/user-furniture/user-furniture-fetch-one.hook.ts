import { useLazyQuery } from "@apollo/client";
import { UserFurnitureFragment } from "./user-furniture.fragment";
import { UserFurnitureFilterOneInput } from "./user-furniture.input";
import { USER_FURNITURE_FETCH_ONE_QUERY, UserFurnitureFetchOneResponse, UserFurnitureFetchOneVariables } from "./user-furniture-fetch-one.query";


export interface UseUserFurnitureFetchOneResponse {
  fetch(filter: UserFurnitureFilterOneInput): Promise<UserFurnitureFragment>;
  error?: Error;
  loading: boolean;
  data?: UserFurnitureFragment;
}

export function useUserFurnitureFetchOne(): UseUserFurnitureFetchOneResponse {
  const [getUserFurnitures, { loading, error, data }] = useLazyQuery<UserFurnitureFetchOneResponse, UserFurnitureFetchOneVariables>(USER_FURNITURE_FETCH_ONE_QUERY);

  const onFetchUserFurnitures = async (filter: UserFurnitureFilterOneInput): Promise<UserFurnitureFragment> => {
    const matchingUserFurnitures = await getUserFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserFurnitures.data!.userFurniture;
  }

  return {
    fetch: onFetchUserFurnitures,
    error,
    loading,
    data: data?.userFurniture,
  }
}