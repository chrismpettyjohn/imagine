import { useLazyQuery } from "@apollo/client";
import { StaffApplicationFragment } from "./staff-application.fragment";
import { StaffApplicationFilterManyInput } from "./staff-application.input";
import { STAFF_APPLICATION_FETCH_MANY_QUERY, StaffApplicationFetchManyQueryResponse, StaffApplicationFetchManyQueryVariables } from "./staff-application-fetch-many.query";

export interface UseStaffApplicationFetchManyResponse {
  fetch(filter: StaffApplicationFilterManyInput): Promise<StaffApplicationFragment[]>;
  error?: Error;
  loading: boolean;
  data?: StaffApplicationFragment[];
}

export function useStaffApplicationFetchMany(): UseStaffApplicationFetchManyResponse {
  const [getStaffApplications, { loading, error, data }] = useLazyQuery<StaffApplicationFetchManyQueryResponse, StaffApplicationFetchManyQueryVariables>(STAFF_APPLICATION_FETCH_MANY_QUERY);

  const onFetchStaffApplications = async (filter: StaffApplicationFilterManyInput): Promise<StaffApplicationFragment[]> => {
    const matchingStaffApplications = await getStaffApplications({ fetchPolicy: "network-only", variables: { filter } })
    return matchingStaffApplications.data!.staffApplications;
  }

  return {
    fetch: onFetchStaffApplications,
    error,
    loading,
    data: data?.staffApplications,
  }
}