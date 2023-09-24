import { ReactNode } from 'react';
import { UserWire } from '@imagine-cms/types';

export interface SessionContext {
  session?: UserWire;
  _setSession(newSession?: UserWire): void;
  setSession(changes: Partial<UserWire>): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  _setSession(newSession?: UserWire) { },
  setSession(changes: Partial<UserWire>) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
