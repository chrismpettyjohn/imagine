import { useLazyQuery } from "@apollo/client";
import { RadioRequestFragment } from "./radio-request.fragment";
import { RadioRequestFilterOneInput } from "./radio-request.input";
import { RADIO_REQUEST_FETCH_ONE_QUERY, RadioRequestFetchOneQueryResponse, RadioRequestFetchOneQueryVariables } from "./radio-request-fetch-one.query";

export interface UseRadioRequestFetchOneResponse {
  fetch(filter: RadioRequestFilterOneInput): Promise<RadioRequestFragment>;
  error?: Error;
  loading: boolean;
  data?: RadioRequestFragment;
}

export function useRadioRequestFetchOne(): UseRadioRequestFetchOneResponse {
  const [getRadioRequest, { loading, error, data }] = useLazyQuery<RadioRequestFetchOneQueryResponse, RadioRequestFetchOneQueryVariables>(RADIO_REQUEST_FETCH_ONE_QUERY);

  const onFetchRadioRequests = async (filter: RadioRequestFilterOneInput): Promise<RadioRequestFragment> => {
    const matchingRadioRequests = await getRadioRequest({ fetchPolicy: "network-only", variables: { filter } })
    return matchingRadioRequests.data!.radioRequest;
  }

  return {
    fetch: onFetchRadioRequests,
    error,
    loading,
    data: data?.radioRequest,
  }
}