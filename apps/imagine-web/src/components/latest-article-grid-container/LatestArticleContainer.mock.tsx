import React from 'react';
import { LatestArticleGridContainerElement, LatestArticleImage, LatestArticleInformation, LatestArticleInformationCategory, LatestArticleInformationTitle } from './LatestArticleGridContainer.styled';

const MOCK_IMAGE_URL = 'https://kubbo.city/assets/images/articles/RaumlayoutFS.png';

export function LatestArticleContainerMock() {
  return (
    <LatestArticleGridContainerElement>
      <LatestArticleImage src={MOCK_IMAGE_URL} />
      <LatestArticleInformation>
        <LatestArticleInformationCategory>
          -
        </LatestArticleInformationCategory>
        <LatestArticleInformationTitle>
          -
        </LatestArticleInformationTitle>
      </LatestArticleInformation>
    </LatestArticleGridContainerElement>
  )
}