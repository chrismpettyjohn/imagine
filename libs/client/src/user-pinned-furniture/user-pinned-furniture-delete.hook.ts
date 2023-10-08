import { useMutation } from "@apollo/client";
import { UserPinnedFurnitureFilterOneInput } from "./user-pinned-furniture.input";
import { USER_PINNED_FURNITURE_DELETE_MUTATION, UserPinnedFurnitureDeleteResponse, UserPinnedFurnitureDeleteVariables } from "./user-pinned-furniture-delete.mutation";

export interface UseUserPinnedFurnitureDeleteResponse {
  execute(input: UserPinnedFurnitureFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useUserPinnedFurnitureDelete(): UseUserPinnedFurnitureDeleteResponse {
  const [getUserPinnedFurniture, { loading, error, data }] = useMutation<UserPinnedFurnitureDeleteResponse, UserPinnedFurnitureDeleteVariables>(USER_PINNED_FURNITURE_DELETE_MUTATION);

  const onFetchUserPinnedFurniture = async (filter: UserPinnedFurnitureFilterOneInput): Promise<boolean> => {
    const matchingUserPinnedFurniture = await getUserPinnedFurniture({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserPinnedFurniture.data!.userPinnedFurnitureDelete;
  }

  return {
    execute: onFetchUserPinnedFurniture,
    error,
    loading,
    data: data?.userPinnedFurnitureDelete,
  }
}