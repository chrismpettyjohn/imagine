import { useMutation } from "@apollo/client";
import { UserPinnedFurnitureFragment } from "./user-pinned-furniture.fragment";
import { UserPinnedFurnitureCreateInput } from "./user-pinned-furniture.input";
import { USER_PINNED_FURNITURE_CREATE_MUTATION, UserPinnedFurnitureCreateResponse, UserPinnedFurnitureCreateVariables } from "./user-pinned-furniture-create.mutation";

export interface UseUserPinnedFurnitureCreateResponse {
  execute(input: UserPinnedFurnitureCreateInput): Promise<UserPinnedFurnitureFragment>;
  error?: Error;
  loading: boolean;
  data?: UserPinnedFurnitureFragment;
}

export function useUserPinnedFurnitureCreate(): UseUserPinnedFurnitureCreateResponse {
  const [getUserPinnedFurniture, { loading, error, data }] = useMutation<UserPinnedFurnitureCreateResponse, UserPinnedFurnitureCreateVariables>(USER_PINNED_FURNITURE_CREATE_MUTATION);

  const onFetchUserPinnedFurniture = async (input: UserPinnedFurnitureCreateInput): Promise<UserPinnedFurnitureFragment> => {
    const matchingUserPinnedFurniture = await getUserPinnedFurniture({ fetchPolicy: "network-only", variables: { input } })
    return matchingUserPinnedFurniture.data!.userPinnedFurnitureCreate;
  }

  return {
    execute: onFetchUserPinnedFurniture,
    error,
    loading,
    data: data?.userPinnedFurnitureCreate,
  }
}