import React from 'react';
import { Link } from 'wouter';
import { ArticleListContainerProps } from './ArticleListContainer.types';
import { LongUserContainer } from '../long-user-container/LongUserContainer';
import { ArticleListContainerCategory, ArticleListContainerDescription, ArticleListContainerElement, ArticleListContainerImage, ArticleListContainerInformation, ArticleListContainerTitle } from './ArticleListContainer.styled';

export function ArticleListContainer({ article }: ArticleListContainerProps) {
  return (
    <Link to={`/articles/${article.id}`}>
      <ArticleListContainerElement>
        <ArticleListContainerImage src={article.imageURL} />
        <ArticleListContainerInformation>
          <ArticleListContainerCategory>Announcements</ArticleListContainerCategory>
          <ArticleListContainerTitle>{article.name}</ArticleListContainerTitle>
          <ArticleListContainerDescription>{article.description}</ArticleListContainerDescription>
          {article.user && (
            <Link to={`/profile/${article.user?.username}`}>
              <LongUserContainer user={article.user} />
            </Link>
          )}
        </ArticleListContainerInformation>
      </ArticleListContainerElement>
    </Link>
  )
}