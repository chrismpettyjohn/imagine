import {RankWire} from '@imagine-cms/types';

export interface EditRankModalProps {
  rank: RankWire;
  onUpdate(updatedRank: RankWire): void;
}
