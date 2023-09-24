import { useMutation } from "@apollo/client";
import { RadioRequestFilterOneInput, RadioRequestUpdateInput } from "./radio-request.input";
import { RADIO_REQUEST_UPDATE_ONE_MUTATION, RadioRequestUpdateOneMutationResponse, RadioRequestUpdateOneMutationVariables } from "./radio-request-update-one.mutation";

export interface UseRadioRequestUpdateResponse {
  execute(filter: RadioRequestFilterOneInput, input: RadioRequestUpdateInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useRadioRequestUpdate(): UseRadioRequestUpdateResponse {
  const [UpdateRadioRequest, { loading, error, data }] = useMutation<RadioRequestUpdateOneMutationResponse, RadioRequestUpdateOneMutationVariables>(RADIO_REQUEST_UPDATE_ONE_MUTATION);

  const onFetchRadioRequest = async (filter: RadioRequestFilterOneInput, input: RadioRequestUpdateInput): Promise<boolean> => {
    const matchingRadioRequest = await UpdateRadioRequest({ fetchPolicy: "network-only", variables: { filter, input } })
    return matchingRadioRequest.data!.radioRequestUpdate;
  }

  return {
    execute: onFetchRadioRequest,
    error,
    loading,
    data: data?.radioRequestUpdate,
  }
}