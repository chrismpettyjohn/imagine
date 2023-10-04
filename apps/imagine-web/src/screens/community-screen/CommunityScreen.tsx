import React from 'react';
import { LatestArticlesGrid } from '../../components/latest-articles-grid/LatestArticlesGrid';
import { LatestPhotosContainer } from '../../components/latest-photos-container/LatestPhotosContainer';

export function CommunityScreen() {
  return (
    <>
      <LatestPhotosContainer />
      <br />
      <LatestArticlesGrid />
    </>
  )
}
