import { UserFragment } from '@imagine-cms/client';

export interface LeaderboardsCardProps {
  title: string;
  value(user: UserFragment): string;
  query: any;
}
