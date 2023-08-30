import { UserWire } from '@imagine-cms/types';

export interface LeaderboardsCardProps {
  title: string;
  value(user: UserWire): string;
  query: any;
}
