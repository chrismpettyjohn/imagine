import {createContext} from 'react';
import {defaultSessionContext, SessionContext} from './SessionContext.types';

export const sessionContext = createContext<SessionContext>(
  defaultSessionContext
);
