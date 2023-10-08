import { useLazyQuery } from "@apollo/client";
import { FurnitureFragment } from "./furniture.fragment";
import { FurnitureFilterOneInput } from "./furniture.input";
import { FURNITURE_FETCH_ONE_QUERY, FurnitureFetchOneQueryResponse, FurnitureFetchOneQueryVariables } from "./furniture-fetch-one.query";

export interface UseFurnitureFetchOneResponse {
  fetch(filter: FurnitureFilterOneInput): Promise<FurnitureFragment>;
  error?: Error;
  loading: boolean;
  data?: FurnitureFragment;
}

export function useFurnitureFetchOne(): UseFurnitureFetchOneResponse {
  const [getFurnitures, { loading, error, data }] = useLazyQuery<FurnitureFetchOneQueryResponse, FurnitureFetchOneQueryVariables>(FURNITURE_FETCH_ONE_QUERY);

  const onFetchFurnitures = async (filter: FurnitureFilterOneInput): Promise<FurnitureFragment> => {
    const matchingFurnitures = await getFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurnitures.data!.furniture;
  }

  return {
    fetch: onFetchFurnitures,
    error,
    loading,
    data: data?.furniture,
  }
}