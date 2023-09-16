import { BetaCodeFragment } from "@imagine-cms/client";

export interface BetaCodeDeleteButtonProps {
  betaCode: BetaCodeFragment;
  onDelete(): void;
}