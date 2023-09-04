import gql from 'graphql-tag';
import { PhotoFilterManyInput } from './photo.input';
import { PHOTO_FRAGMENT, PhotoFragment } from './photo.fragment';

export const PHOTO_FETCH_MANY_QUERY: any = gql`
  ${PHOTO_FRAGMENT}
  query($filter: PhotoFilterManyInput!) {
    photos(filter: $filter) {
      ...PhotoFragment
    }
  }
`

export interface PhotoFetchManyResponse {
  photos: PhotoFragment[];
}

export interface PhotoFetchManyVariables {
  filter: PhotoFilterManyInput;
}