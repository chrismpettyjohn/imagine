import { RankFragment, RankUpdateInput } from "@imagine-cms/client";

export interface RankDetailsEditorCardProps {
  defaultRank: RankFragment;
  onSave(rankDTO: RankUpdateInput): Promise<void> | void;
}