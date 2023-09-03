import React from 'react';
import { PhotoContainer } from '../photo-container/PhotoContainer';
import { PhotosGridContainerProps } from './PhotosGridContainer.types';
import { PhotosGridContainerContent, PhotosGridContainerElement } from './PhotosGridContainer.styled';

export function PhotosGridContainer({ photos: stories }: PhotosGridContainerProps) {
  return (
    <PhotosGridContainerElement>
      <PhotosGridContainerContent>
        {
          stories.map(_ => (
            <PhotoContainer key={`photo_${_.id}`} story={_} />
          ))
        }
      </PhotosGridContainerContent>
    </PhotosGridContainerElement>
  )
}