import React from 'react';
import { Link } from 'wouter';
import { ArticleListContainerProps } from './ArticleLIstContainer.types';
import { ArticleListContainerAuthor, ArticleListContainerAuthorAvatar, ArticleListContainerCategory, ArticleListContainerDescription, ArticleListContainerElement, ArticleListContainerImage, ArticleListContainerInformation, ArticleListContainerTitle } from './ArticleListContainer.styled';

export function ArticleListContainer({ article }: ArticleListContainerProps) {
  return (
    <Link to={`/community/articles/${article.id}`}>
      <ArticleListContainerElement>
        <ArticleListContainerImage src={article.imageURL} />
        <ArticleListContainerInformation>
          <ArticleListContainerCategory>Announcements</ArticleListContainerCategory>
          <ArticleListContainerTitle>{article.name}</ArticleListContainerTitle>
          <ArticleListContainerDescription>{article.description}</ArticleListContainerDescription>
          <Link to={`/profiles/${article.user?.username}`}>
            <ArticleListContainerAuthor>
              <ArticleListContainerAuthorAvatar src={`https://imager.habboon.pw/?figure=${article.user?.look}&size=m&direction=2&head_direction=2&gesture=sml&headonly=1`} />
              {article.user?.username}
            </ArticleListContainerAuthor>
          </Link>
        </ArticleListContainerInformation>
      </ArticleListContainerElement>
    </Link>
  )
}