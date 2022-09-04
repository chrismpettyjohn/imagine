import {UseMutationResponse} from '@imagine-cms/web';

export interface DeleteModalProps<Resource> {
  resource: string;
  mutation: UseMutationResponse<Resource>
  onDelete(): void;
}
