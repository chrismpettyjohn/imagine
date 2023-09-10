import { ReactNode } from 'react';
import { RankScopesWire } from "@imagine-cms/types";

export interface ScopeGuardProps {
  redirect?: boolean;
  scope: keyof RankScopesWire;
  children: ReactNode;
}