import React from 'react';
import { LatestArticleContainerProps } from './LatestArticleGridContainer.types';
import { LatestArticleGridContainerElement, LatestArticleImage, LatestArticleInformation, LatestArticleInformationCategory, LatestArticleInformationTitle, } from './LatestArticleGridContainer.styled';
import { Link } from 'wouter';

export function LatestArticleContainer({ article }: LatestArticleContainerProps) {
  return (
    <Link to={`/community/articles/${article.id}`}>
      <LatestArticleGridContainerElement>
        <LatestArticleImage src={article.imageURL} />
        <LatestArticleInformation>
          <LatestArticleInformationCategory>
            {article.name}
          </LatestArticleInformationCategory>
          <LatestArticleInformationTitle>
            {article.description}
          </LatestArticleInformationTitle>
        </LatestArticleInformation>
      </LatestArticleGridContainerElement>
    </Link>
  )
}