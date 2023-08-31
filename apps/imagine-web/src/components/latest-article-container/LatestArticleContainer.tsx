import React from 'react';
import { LatestArticleContainerProps } from './LatestArticleContainer.types';
import { LatestArticleContainerElement, LatestArticleImage, LatestArticleInformation, LatestArticleInformationCategory, LatestArticleInformationTitle, } from './LatestArticleContainer.styled';
import { Link } from 'wouter';

export function LatestArticleContainer({ article }: LatestArticleContainerProps) {
  return (
    <Link to={`/community/articles/${article.id}`}>
      <LatestArticleContainerElement>
        <LatestArticleImage src={article.imageURL} />
        <LatestArticleInformation>
          <LatestArticleInformationCategory>
            {article.name}
          </LatestArticleInformationCategory>
          <LatestArticleInformationTitle>
            {article.description}
          </LatestArticleInformationTitle>
        </LatestArticleInformation>
      </LatestArticleContainerElement>
    </Link>
  )
}