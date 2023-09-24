import { useMutation } from "@apollo/client";
import { RadioRequestCreateInput } from "./radio-request.input";
import { RadioRequestFragment } from "./radio-request.fragment";
import { RADIO_REQUEST_CREATE_ONE_MUTATION, RadioRequestCreateOneMutationResponse, RadioRequestCreateOneMutationVariables } from "./radio-request-create-one.mutation";

export interface UseRadioRequestCreateResponse {
  execute(input: RadioRequestCreateInput): Promise<RadioRequestFragment>;
  error?: Error;
  loading: boolean;
  data?: RadioRequestFragment;
}

export function useRadioRequestCreate(): UseRadioRequestCreateResponse {
  const [createRadioRequest, { loading, error, data }] = useMutation<RadioRequestCreateOneMutationResponse, RadioRequestCreateOneMutationVariables>(RADIO_REQUEST_CREATE_ONE_MUTATION);

  const onFetchRadioRequest = async (input: RadioRequestCreateInput): Promise<RadioRequestFragment> => {
    const matchingRadioRequest = await createRadioRequest({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
    return matchingRadioRequest.data!.radioRequestCreate;
  }

  return {
    execute: onFetchRadioRequest,
    error,
    loading,
    data: data?.radioRequestCreate,
  }
}