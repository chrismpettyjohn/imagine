import React from 'react';
import { Link } from 'wouter';
import { LatestArticleContainerProps } from './LatestArticleGridContainer.types';
import { LatestArticleGridContainerElement, LatestArticleImage, LatestArticleInformation, LatestArticleInformationCategory, LatestArticleInformationTitle, } from './LatestArticleGridContainer.styled';

export function LatestArticleContainer({ article }: LatestArticleContainerProps) {
  return (
    <Link to={`/articles/${article.id}`}>
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