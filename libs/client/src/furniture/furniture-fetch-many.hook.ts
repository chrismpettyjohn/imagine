import { useLazyQuery } from "@apollo/client";
import { FurnitureFragment } from "./furniture.fragment";
import { FurnitureFilterManyInput } from "./furniture.input";
import { FURNITURE_FETCH_MANY_QUERY, FurnitureFetchManyQueryResponse, FurnitureFetchManyQueryVariables } from "./furniture-fetch-many.query";

export interface UseFurnitureFetchManyResponse {
  fetch(filter: FurnitureFilterManyInput): Promise<FurnitureFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurnitureFragment[];
}

export function useFurnitureFetchMany(): UseFurnitureFetchManyResponse {
  const [getFurnitures, { loading, error, data }] = useLazyQuery<FurnitureFetchManyQueryResponse, FurnitureFetchManyQueryVariables>(FURNITURE_FETCH_MANY_QUERY);

  const onFetchFurnitures = async (filter: FurnitureFilterManyInput): Promise<FurnitureFragment[]> => {
    const matchingFurnitures = await getFurnitures({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurnitures.data!.furnitures;
  }

  return {
    fetch: onFetchFurnitures,
    error,
    loading,
    data: data?.furnitures,
  }
}