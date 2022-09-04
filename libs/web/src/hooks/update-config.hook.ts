import gql from 'graphql-tag';
import {ConfigUpdateInputDTO} from '@imagine-cms/types';
import {useRunMutation, UseMutationResponse} from '@imagine-cms/web';

const UPDATE_CONFIG = gql`
    mutation($configUpdateInput: ConfigUpdateInput!) {
        configUpdate(configUpdateInput: $configUpdateInput)
    }
`

export function useUpdateConfig(configUpdateInput: ConfigUpdateInputDTO): UseMutationResponse<boolean> {
  return useRunMutation(UPDATE_CONFIG, {configUpdateInput})
}
