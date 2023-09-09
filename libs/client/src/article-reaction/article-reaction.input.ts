import { ArticleReactionType } from "./article-reaction.fragment";

export interface ArticleReactionCreateInput {
  articleID: number;
  reaction: ArticleReactionType;
}

export interface ArticleReactionUpdateInput {
  reaction: ArticleReactionType;
}

export interface ArticleReactionFilterManyInput {
  ids?: number[];
  articleIDs?: number[];
  userIDs?: number[];
}

export interface ArticleReactionFilterOneInput {
  id: number;
}

export interface ArticleReactionDeleteInput {
  id: number;
}