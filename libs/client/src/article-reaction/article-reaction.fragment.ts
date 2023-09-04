import gql from 'graphql-tag';

export const ARTICLE_REACTION_FRAGMENT: any = gql`
  fragment ArticleReactionFragment on ArticleReactionModel {
    id
    articleID
    userID
    reaction
    createdAt
    updatedAt
  }
`

export enum ArticleReactionType {
  Like = 1,
  Dislike = 2,
}

export interface ArticleReactionFragment {
  id: number;
  articleID: number;
  userID: number;
  reaction: ArticleReactionType;
  createdAt: number;
  updatedAt: number;
}