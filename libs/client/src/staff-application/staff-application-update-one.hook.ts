import { useMutation } from "@apollo/client";
import { StaffApplicationFilterOneInput, StaffApplicationUpdateInput } from "./staff-application.input";
import { STAFF_APPLICATION_UPDATE_ONE_MUTATION, StaffApplicationUpdateOneMutationResponse, StaffApplicationUpdateOneMutationVariables } from "./staff-application-update-one.mutation";

export interface UseStaffApplicationUpdateResponse {
  execute(filter: StaffApplicationFilterOneInput, input: StaffApplicationUpdateInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useStaffApplicationUpdate(): UseStaffApplicationUpdateResponse {
  const [getStaffApplication, { loading, error, data }] = useMutation<StaffApplicationUpdateOneMutationResponse, StaffApplicationUpdateOneMutationVariables>(STAFF_APPLICATION_UPDATE_ONE_MUTATION);

  const onFetchStaffApplication = async (filter: StaffApplicationFilterOneInput, input: StaffApplicationUpdateInput): Promise<boolean> => {
    const matchingStaffApplication = await getStaffApplication({ variables: { filter, input } })
    return matchingStaffApplication.data!.staffApplicationUpdate;
  }

  return {
    execute: onFetchStaffApplication,
    error,
    loading,
    data: data?.staffApplicationUpdate,
  }
}