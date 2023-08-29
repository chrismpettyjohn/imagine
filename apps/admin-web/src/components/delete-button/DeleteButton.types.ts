import {UseMutationResponse} from '@imagine-cms/web';

export interface DeleteButtonProps<Resource> {
  resource: string;
  mutation: UseMutationResponse<Resource>
  onDelete(): void;
}
