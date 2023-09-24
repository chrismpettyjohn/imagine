import { useLazyQuery } from "@apollo/client";
import { StaffApplicationFragment } from "./staff-application.fragment";
import { StaffApplicationFilterOneInput } from "./staff-application.input";
import { STAFF_APPLICATION_FETCH_ONE_QUERY, StaffApplicationFetchOneQueryResponse, StaffApplicationFetchOneQueryVariables } from "./staff-application-fetch-one.query";

export interface UseStaffApplicationFetchOneResponse {
  fetch(filter: StaffApplicationFilterOneInput): Promise<StaffApplicationFragment>;
  error?: Error;
  loading: boolean;
  data?: StaffApplicationFragment;
}

export function useStaffApplicationFetchOne(): UseStaffApplicationFetchOneResponse {
  const [getStaffApplications, { loading, error, data }] = useLazyQuery<StaffApplicationFetchOneQueryResponse, StaffApplicationFetchOneQueryVariables>(STAFF_APPLICATION_FETCH_ONE_QUERY);

  const onFetchStaffApplications = async (filter: StaffApplicationFilterOneInput): Promise<StaffApplicationFragment> => {
    const matchingStaffApplications = await getStaffApplications({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingStaffApplications.data!.staffApplication;
  }

  return {
    fetch: onFetchStaffApplications,
    error,
    loading,
    data: data?.staffApplication,
  }
}