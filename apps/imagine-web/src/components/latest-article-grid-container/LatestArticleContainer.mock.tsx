import React from 'react';
import { LatestArticleGridContainerElement, LatestArticleImage } from './LatestArticleGridContainer.styled';

const MOCK_IMAGE_URL = 'https://kubbo.city/assets/images/articles/RaumlayoutFS.png';

export function LatestArticleContainerMock() {
  return (
    <LatestArticleGridContainerElement>
      <div style={{ flex: 1 }}>
        <LatestArticleImage src="https://kubbo.city/assets/images/articles/RaumlayoutFS.png" />
      </div>
      <div style={{ flex: 4 }}>
        <h3>-</h3>
        <span>-</span>
        <span>-</span>
      </div>
    </LatestArticleGridContainerElement>
  )
}