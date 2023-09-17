import { RadioRequestStatus } from "./radio-request.fragment";

export interface RadioRequestFilterOneInput {
  id: number;
}

export interface RadioRequestFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  reviewingUserIDs?: number[];
  statuses?: RadioRequestStatus[];
  limit?: number;
}

export interface RadioRequestCreateInput {
  content: string;
}

export interface RadioRequestUpdateInput {
  content: string;
}

export interface RadioRequestReviewInput {
  status: RadioRequestStatus;
}