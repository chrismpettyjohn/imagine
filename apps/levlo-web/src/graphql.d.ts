import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  rankCreate: RankModel;
  rankDelete: Scalars['Boolean'];
  rankUpdate: Scalars['Boolean'];
  sessionCreate: Scalars['String'];
  userCreate: UserModel;
  userDelete: Scalars['Boolean'];
  userUpdate: Scalars['Boolean'];
};


export type MutationRankCreateArgs = {
  newRank: RankCreateInput;
};


export type MutationRankDeleteArgs = {
  id: Scalars['Float'];
};


export type MutationRankUpdateArgs = {
  id: Scalars['Float'];
  rankChanges: RankUpdateInput;
};


export type MutationSessionCreateArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUserCreateArgs = {
  newUser: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['Float'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['Float'];
  userChanges: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  rank: RankModel;
  ranks: Array<RankModel>;
  session: SessionModel;
  sessionCurrent: SessionModel;
  sessions: Array<SessionModel>;
  user: UserModel;
  users: Array<UserModel>;
};


export type QueryRankArgs = {
  id: Scalars['Float'];
};


export type QuerySessionArgs = {
  id: Scalars['Float'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type RankCreateInput = {
  badgeCode: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RankModel = {
  __typename?: 'RankModel';
  badgeCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<UserModel>>;
};

export type RankUpdateInput = {
  badgeCode: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type SessionModel = {
  __typename?: 'SessionModel';
  id: Scalars['ID'];
  userID: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  rankCreated: RankModel;
  rankDeleted: RankModel;
  sessionCreated: SessionModel;
  userCreated: UserModel;
  userDeleted: UserModel;
};

export enum UserAllowingNewFriendsStatus {
  No = 'No',
  Yes = 'Yes'
}

export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export enum UserGender {
  Female = 'Female',
  Male = 'Male'
}

export type UserModel = {
  __typename?: 'UserModel';
  accountCreatedAt?: Maybe<Scalars['String']>;
  activityPoints?: Maybe<Scalars['Float']>;
  allowingNewFriends?: Maybe<UserAllowingNewFriendsStatus>;
  credits?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  gameSSO?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  homeRoomID?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  ipRegisteredWith?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['String']>;
  look?: Maybe<Scalars['String']>;
  motto?: Maybe<Scalars['String']>;
  muteStatus?: Maybe<UserMuteStatus>;
  onlineStatus?: Maybe<UserOnlineStatus>;
  rank?: Maybe<RankModel>;
  rankID?: Maybe<Scalars['ID']>;
  rankVip?: Maybe<RankModel>;
  rankVipID?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<SessionModel>>;
  showOnlineStatus?: Maybe<UserShowOnlineStatus>;
  username?: Maybe<Scalars['String']>;
  vipPoints?: Maybe<Scalars['Float']>;
  vipStatus?: Maybe<UserVipStatus>;
};

export enum UserMuteStatus {
  IsMuted = 'IsMuted',
  NotMuted = 'NotMuted'
}

export enum UserOnlineStatus {
  Offline = 'Offline',
  Online = 'Online'
}

export enum UserShowOnlineStatus {
  Hidden = 'Hidden',
  Visible = 'Visible'
}

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export enum UserVipStatus {
  No = 'No',
  Yes = 'Yes'
}
