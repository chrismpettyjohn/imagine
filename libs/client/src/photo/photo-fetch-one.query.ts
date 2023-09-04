import gql from 'graphql-tag';
import { PHOTO_FRAGMENT, PhotoFragment } from './photo.fragment';
import { PhotoFilterOneInput } from './photo.input';

export const PHOTO_FETCH_ONE_QUERY: any = gql`
  ${PHOTO_FRAGMENT}
  query($filter: PhotoFilterOneInput!) {
    photo(filter: $filter) {
      ...PhotoFragment
    }
  }
`

export interface PhotoFetchOneResponse {
  photo: PhotoFragment;
}

export interface PhotoFetchOneVariables {
  filter: PhotoFilterOneInput;
}