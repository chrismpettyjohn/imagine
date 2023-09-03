import gql from 'graphql-tag';
import { PHOTO_FRAGMENT, PhotoFragment } from '../fragments/photo.fragment';

export const PHOTO_FETCH_ONE_QUERY: any = gql`
  ${PHOTO_FRAGMENT}
  query($photoID: Int!) {
    photo(photo: $photoID) {
      ...PhotoFragment
    }
  }
`

export interface PhotoFetchOneResponse {
  photo: PhotoFragment;
}

export interface PhotoFetchOneVariables {
  photo: number;
}