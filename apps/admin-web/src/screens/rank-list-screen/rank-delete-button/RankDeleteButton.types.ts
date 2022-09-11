import {RankWire} from '@imagine-cms/types';

export interface DeleteRankModalProps {
  rank: RankWire;
  onDelete(): void;
}
