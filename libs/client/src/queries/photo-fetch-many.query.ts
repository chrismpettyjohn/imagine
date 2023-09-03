import gql from 'graphql-tag';
import { PhotoFilterManyInput } from '../input/photo.input';
import { PHOTO_FRAGMENT, PhotoFragment } from '../fragments/photo.fragment';

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