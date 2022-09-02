import {ReactNode} from 'react';

export interface SessionContext {
  session?: any;
  setSession(newSession?: any): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: any) {},
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
