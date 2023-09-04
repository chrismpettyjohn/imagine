import gql from 'graphql-tag';
import { ConfigWire } from '@imagine-cms/types';
import { UseQueryResponse, useRunQuery } from './run-query.hook';

const FETCH_SITE_CONFIG = gql`
    query {
        config {
            siteName
            logoURL
            nitroURL
            badgeURL
            badgeEXT
            groupBadgeURL
            discordURL
            discordWidget
            twitterURL
            facebookURL
            instagramURL
            snapchatURL,
            dateFormat
            softwareVersion
        }
    }
`;

export const useFetchConfig = (): UseQueryResponse<{ config: ConfigWire }> => {
    return useRunQuery(FETCH_SITE_CONFIG);
};
