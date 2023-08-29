import {RankWire} from '@imagine-cms/types';

export interface CreateRankModalProps {
  onCreate(newRank: RankWire): void;
}
