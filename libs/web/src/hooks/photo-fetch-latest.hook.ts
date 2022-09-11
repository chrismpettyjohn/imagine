import gql from 'graphql-tag';
import {PhotoWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_LATEST_PHOTOS = gql`
    query ($limit: Float!) {
        photos(other: {take: $limit, order: {id: "DESC"}}) {
            id
            user {
                username
                look
            }
            photoURL
            createdAt
        }
    }
`;

export const useFetchLatestPhotos = (limit = 20): UseQueryResponse<{photos: PhotoWire[]}> => {
  return useRunQuery(FETCH_LATEST_PHOTOS, {limit});
};
