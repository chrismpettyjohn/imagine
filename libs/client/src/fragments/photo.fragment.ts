import { gql } from 'graphql-tag';

export interface PhotoFragment {
  id: number;
  userID: number;
  roomID: number;
  photoURL: string;
  createdAt: number;
}

export const PHOTO_FRAGMENT: any = gql`
  fragment PhotoFragment on PhotoModel {
    id
    userID
    roomID
    photoURL
    createdAt
  }`