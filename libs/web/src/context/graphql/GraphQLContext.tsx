import {createContext} from 'react';
import {GraphQLContext, defaultGraphQLContext} from './GraphQLContext.types';

export const graphQLContext = createContext<GraphQLContext>(defaultGraphQLContext);
