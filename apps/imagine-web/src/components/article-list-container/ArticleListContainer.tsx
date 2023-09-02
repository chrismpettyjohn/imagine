import React from 'react';
import { Link } from 'wouter';
import { ArticleListContainerAuthor, ArticleListContainerAuthorAvatar, ArticleListContainerCategory, ArticleListContainerDescription, ArticleListContainerElement, ArticleListContainerImage, ArticleListContainerInformation, ArticleListContainerTitle } from './ArticleListContainer.styled';
import { ArticleListContainerProps } from './ArticleListContainer.types';
import { LongUserContainer } from '../long-user-container/LongUserContainer';

export function ArticleListContainer({ article }: ArticleListContainerProps) {
  return (
    <Link to={`/community/articles/${article.id}`}>
      <ArticleListContainerElement>
        <ArticleListContainerImage src={article.imageURL} />
        <ArticleListContainerInformation>
          <ArticleListContainerCategory>Announcements</ArticleListContainerCategory>
          <ArticleListContainerTitle>{article.name}</ArticleListContainerTitle>
          <ArticleListContainerDescription>{article.description}</ArticleListContainerDescription>
          {article.user && (
            <Link to={`/profiles/${article.user?.username}`}>
              <LongUserContainer user={article.user} />
            </Link>
          )}
        </ArticleListContainerInformation>
      </ArticleListContainerElement>
    </Link>
  )
}