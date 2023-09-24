import { useMutation } from "@apollo/client";
import { StaffApplicationFragment } from "./staff-application.fragment";
import { StaffApplicationCreateInput } from "./staff-application.input";
import { STAFF_APPLICATION_CREATE_MUTATION, StaffApplicationCreateMutationResponse, StaffApplicationCreateMutationVariables } from "./staff-application-create.mutation";

export interface UseStaffApplicationCreateResponse {
  execute(input: StaffApplicationCreateInput): Promise<StaffApplicationFragment>;
  error?: Error;
  loading: boolean;
  data?: StaffApplicationFragment;
}

export function useStaffApplicationCreate(): UseStaffApplicationCreateResponse {
  const [getStaffApplication, { loading, error, data }] = useMutation<StaffApplicationCreateMutationResponse, StaffApplicationCreateMutationVariables>(STAFF_APPLICATION_CREATE_MUTATION);

  const onFetchStaffApplication = async (input: StaffApplicationCreateInput): Promise<StaffApplicationFragment> => {
    const matchingStaffApplication = await getStaffApplication({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
    return matchingStaffApplication.data!.staffApplicationCreate;
  }

  return {
    execute: onFetchStaffApplication,
    error,
    loading,
    data: data?.staffApplicationCreate,
  }
}