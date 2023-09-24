import { useLazyQuery } from "@apollo/client";
import { RadioRequestFragment } from "./radio-request.fragment";
import { RadioRequestFilterManyInput } from "./radio-request.input";
import { RADIO_REQUEST_FETCH_MANY_QUERY, RadioRequestFetchManyQueryResponse, RadioRequestFetchManyQueryVariables } from "./radio-request-fetch-many.query";

export interface UseRadioRequestFetchManyResponse {
  fetch(filter: RadioRequestFilterManyInput): Promise<RadioRequestFragment[]>;
  error?: Error;
  loading: boolean;
  data?: RadioRequestFragment[];
}

export function useRadioRequestFetchMany(): UseRadioRequestFetchManyResponse {
  const [getRadioRequests, { loading, error, data }] = useLazyQuery<RadioRequestFetchManyQueryResponse, RadioRequestFetchManyQueryVariables>(RADIO_REQUEST_FETCH_MANY_QUERY);

  const onFetchRadioRequests = async (filter: RadioRequestFilterManyInput): Promise<RadioRequestFragment[]> => {
    const matchingRadioRequests = await getRadioRequests({ fetchPolicy: "network-only", variables: { filter } })
    return matchingRadioRequests.data!.radioRequests;
  }

  return {
    fetch: onFetchRadioRequests,
    error,
    loading,
    data: data?.radioRequests,
  }
}