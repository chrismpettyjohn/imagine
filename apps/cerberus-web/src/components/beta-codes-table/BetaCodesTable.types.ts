import { BetaCodeFragment } from "@imagine-cms/client";

export interface BetaCodesTableProps {
  betaCodes?: BetaCodeFragment[];
  onChanges(): void;
}