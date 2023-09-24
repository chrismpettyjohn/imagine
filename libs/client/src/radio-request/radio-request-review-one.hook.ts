import { useMutation } from "@apollo/client";
import { RadioRequestFilterOneInput, RadioRequestReviewInput } from "./radio-request.input";
import { RADIO_REQUEST_REVIEW_ONE_MUTATION, RadioRequestReviewOneMutationResponse, RadioRequestReviewOneMutationVariables } from "./radio-request-review-one.mutation";

export interface UseRadioRequestReviewResponse {
  execute(filter: RadioRequestFilterOneInput, input: RadioRequestReviewInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useRadioRequestReview(): UseRadioRequestReviewResponse {
  const [ReviewRadioRequest, { loading, error, data }] = useMutation<RadioRequestReviewOneMutationResponse, RadioRequestReviewOneMutationVariables>(RADIO_REQUEST_REVIEW_ONE_MUTATION);

  const onFetchRadioRequest = async (filter: RadioRequestFilterOneInput, input: RadioRequestReviewInput): Promise<boolean> => {
    const matchingRadioRequest = await ReviewRadioRequest({ fetchPolicy: "network-only", variables: { filter, input } })
    return matchingRadioRequest.data!.radioRequestReview;
  }

  return {
    execute: onFetchRadioRequest,
    error,
    loading,
    data: data?.radioRequestReview,
  }
}