import { useMutation } from "@apollo/client";
import { STAFF_APPLICATION_DELETE_ONE_MUTATION, StaffApplicationDeleteOneMutationResponse, StaffApplicationDeleteOneMutationVariables } from "./staff-application-delete-one.mutation";

import { StaffApplicationFilterOneInput } from "./staff-application.input";
export interface UseStaffApplicationDeleteResponse {
  execute(filter: StaffApplicationFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useStaffApplicationDelete(): UseStaffApplicationDeleteResponse {
  const [getStaffApplication, { loading, error, data }] = useMutation<StaffApplicationDeleteOneMutationResponse, StaffApplicationDeleteOneMutationVariables>(STAFF_APPLICATION_DELETE_ONE_MUTATION);

  const onFetchStaffApplication = async (filter: StaffApplicationFilterOneInput): Promise<boolean> => {
    const matchingStaffApplication = await getStaffApplication({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingStaffApplication.data!.staffApplicationDelete;
  }

  return {
    execute: onFetchStaffApplication,
    error,
    loading,
    data: data?.staffApplicationDelete,
  }
}