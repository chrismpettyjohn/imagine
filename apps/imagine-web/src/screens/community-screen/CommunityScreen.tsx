import React from 'react';
import { LatestArticlesGrid } from '../../components/latest-articles-grid/LatestArticlesGrid';
import { PhotosGridContainer } from '../../components/photos-grid-container/PhotosGridContainer';

export function CommunityScreen() {
  return (
    <>
      <PhotosGridContainer />
      <br />
      <LatestArticlesGrid />
    </>
  )
}
