import React, { useContext } from 'react';
import DayJS from 'dayjs';
import { Link } from 'wouter';
import { LatestArticleContainerProps } from './LatestArticleGridContainer.types';
import { LatestArticleGridContainerElement, LatestArticleImage } from './LatestArticleGridContainer.styled';
import { configContext } from '@imagine-cms/web';

export function LatestArticleContainer({ article }: LatestArticleContainerProps) {
  const { config } = useContext(configContext);
  return (
    <Link to={`/articles/${article.id}`}>
      <LatestArticleGridContainerElement>
        <div style={{ flex: 1 }}>
          <LatestArticleImage src={article.imageURL} />
        </div>
        <div style={{ flex: 4 }}>
          <h3>{article.name}</h3>
          <span>{DayJS.unix(article.createdAt).format(config!.dateFormat)}</span>
          <span>{article.description}</span>
        </div>
      </LatestArticleGridContainerElement>
    </Link>
  )
}